import Joi from "joi";
import { contract } from "../../../../utils/contract";
import { db } from "../../../../utils/database";
import { getObjectHash } from "../../../../utils/hash";
import {
	createCorsMiddleware,
	createMethodProtectMiddleware,
	withMiddlewares,
} from "../../../../utils/middleware";

async function handler(req, res) {
	try {
		const query = await handler.schema.validateAsync(req.query);

		// Validate loan application existence
		const { data, error } = await db
			.from("loans")
			.select()
			.eq("id", query.id);
		if (error)
			return res.status(500).json({ error: "internal server error" });
		if (data.length === 0)
			return res
				.status(404)
				.json({ error: "loan application is not exist" });

		const [loan] = data;
		if (loan.status !== "disbursed")
			return res
				.status(400)
				.json({ error: "loan application is not disbursed" });

		const hash = getObjectHash(loan);
		const [isExist] = await contract.functions.is_contains(hash);

		return res.status(200).json({ isTampered: !isExist });
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
