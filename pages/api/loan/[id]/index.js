import Joi from "joi";
import { db } from "../../../utils/database";
import {
	createCorsMiddleware,
	createMethodProtectMiddleware,
	withMiddlewares,
} from "../../../utils/middleware";
import { camelCaseObjectKeys } from "../../../utils/transform";

async function handler(req, res) {
	try {
		const query = await handler.schema.validateAsync(req.query);
		const { data, error } = await db
			.from("loans")
			.select()
			.eq("id", query.id);
		if (error)
			return res.status(500).json({ error: "internal server error" });
		if (data.length === 0)
			return res.status(404).json({ error: "loan is not exist" });
		return res.status(200).json({
			success: true,
			data: camelCaseObjectKeys(data[0]),
		});
	} catch (err) {
		return res.status(400).json({ error: err.message });
	}
}

handler.allowedMethods = ["GET"];
handler.schema = Joi.object({
	id: Joi.string().uuid({ version: "uuidv4" }).required(),
});

export default withMiddlewares(
	createCorsMiddleware(handler.allowedMethods),
	createMethodProtectMiddleware(handler.allowedMethods),
	handler
);
