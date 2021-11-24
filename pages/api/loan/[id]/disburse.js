import Joi from "joi";
import { contract } from "../../../../utils/contract";
import { db } from "../../../../utils/database";
import { getObjectHash } from "../../../../utils/hash";
import {
	createCorsMiddleware,
	createMethodProtectMiddleware,
	withMiddlewares,
} from "../../../../utils/middleware";
import { snakeCaseObjectKeys } from "../../../../utils/transform";

async function handler(req, res) {
	try {
		const { id } = await handler.schema.validateAsync(req.query);

		// Validate loan application existence
		const { data, error } = await db.from("loans").select().eq("id", id);
		if (error)
			return res.status(500).json({ error: "internal server error" });
		if (data.length === 0)
			return res
				.status(404)
				.json({ error: "loan application is not exist" });

		// Only allow approved loan applications
		const [loan] = data;
		if (loan.status !== "approved")
			return res
				.status(400)
				.json({ error: "loan application is not approved" });

		// Update loan application status
		const {
			error: hasError,
			data: [updatedLoanData],
		} = await db
			.from("loans")
			.update({
				status: "disbursed",
				disbursed_at: new Date().toISOString(),
			})
			.match({ id });
		if (hasError)
			return res.status(500).json({ error: "internal server error" });

		try {
			const hash = getObjectHash(updatedLoanData);
			const { hash: txId } = await contract.functions.insert(hash);
			await db
				.from("disburse_logs")
				.insert(snakeCaseObjectKeys({ txId, loanId: id }))
				.catch(() => {});
		} catch (error) {
			console.error(error);
			return res.status(500).json({ error: "internal server error" });
		}

		return res.status(200).json({ success: true });
	} catch (err) {
		return res.status(400).json({ error: err.message });
	}
}

handler.allowedMethods = ["POST"];
handler.schema = Joi.object({
	id: Joi.string().uuid({ version: "uuidv4" }).required(),
});

export default withMiddlewares(
	createCorsMiddleware(handler.allowedMethods),
	createMethodProtectMiddleware(handler.allowedMethods),
	handler
);
