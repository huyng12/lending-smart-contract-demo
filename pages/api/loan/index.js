import Joi from "joi";
import { db } from "../../../utils/database";
import {
	createCorsMiddleware,
	createMethodProtectMiddleware,
	withMiddlewares,
} from "../../../utils/middleware";
import {
	camelCaseObjectKeys,
	snakeCaseObjectKeys,
} from "../../../utils/transform";

const getAllLoansHandler = async (_, res) => {
	const { data, error } = await db.from("loans").select(`
		id,
		status,
		name,
		national_id,
		phone_number,
		gender,
		amount,
		interest_rate,
		duration,
		disbursed_at,
		created_at,
		transactions:disburse_logs(tx_id)
	`);
	if (error) return res.status(500).json({ error: "internal server error" });
	return res
		.status(200)
		.json({ success: true, data: data.map(camelCaseObjectKeys) });
};

const createLoanHandler = async (req, res) => {
	try {
		const body = await createLoanHandler.schema.validateAsync(req.body);
		const {
			data: [{ id }],
			error,
		} = await db.from("loans").insert(snakeCaseObjectKeys(body));
		if (error)
			return res.status(500).json({ error: "internal server error" });
		return res.status(200).json({
			success: true,
			message: "Created loan successfully",
			id,
		});
	} catch (err) {
		return res.status(400).json({ error: err.message });
	}
};

createLoanHandler.schema = Joi.object({
	name: Joi.string().min(3).max(100).required(),
	nationalId: Joi.string().min(9).required(),
	phoneNumber: Joi.string().length(12).pattern(/^\+84/).required(),
	gender: Joi.number().min(0).max(1).required(),
	amount: Joi.number().min(1000000).max(100000000).required(),
	interestRate: Joi.number().min(0).required(),
	duration: Joi.number().min(1).max(36).required(),
});

async function handler(req, res) {
	return req.method === "GET"
		? getAllLoansHandler(req, res)
		: createLoanHandler(req, res);
}

handler.allowedMethods = ["GET", "POST"];

export default withMiddlewares(
	createCorsMiddleware(handler.allowedMethods),
	createMethodProtectMiddleware(handler.allowedMethods),
	handler
);
