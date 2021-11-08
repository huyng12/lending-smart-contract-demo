import Joi from "joi";
import { db } from "../../../utils/database";
import {
	createCorsMiddleware,
	createMethodProtectMiddleware,
	withMiddlewares,
} from "../../../utils/middleware";

async function handler(req, res) {
	try {
		const body = { ...req.query, ...req.body };
		const { status, id } = await handler.schema.validateAsync(body);

		// Validate loan application existence
		const { data, error } = await db.from("loans").select().eq("id", id);
		if (error)
			return res.status(500).json({ error: "internal server error" });
		if (data.length === 0)
			return res
				.status(404)
				.json({ error: "loan application is not exist" });

		// Only update pending loan applications
		const [loan] = data;
		if (loan.status !== "pending")
			return res
				.status(400)
				.json({ error: "loan application was reviewed" });

		// Update loan application status
		const { error: hasError } = await db
			.from("loans")
			.update({ status })
			.match({ id });
		if (hasError)
			return res.status(500).json({ error: "internal server error" });

		return res.status(200).json({ success: true });
	} catch (err) {
		return res.status(400).json({ error: err.message });
	}
}

handler.allowedMethods = ["POST"];
handler.schema = Joi.object({
	id: Joi.string().uuid({ version: "uuidv4" }).required(),
	status: Joi.string().valid("approved", "rejected"),
});

export default withMiddlewares(
	createCorsMiddleware(handler.allowedMethods),
	createMethodProtectMiddleware(handler.allowedMethods),
	handler
);
