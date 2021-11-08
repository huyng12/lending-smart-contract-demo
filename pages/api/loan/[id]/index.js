import {
	createCorsMiddleware,
	createMethodProtectMiddleware,
	withMiddlewares,
} from "../../../utils/middleware";
import { isValidLoanId } from "../../../utils/validator";

async function handler(req, res) {
	const id = req.query.id;

	if (!isValidLoanId(id)) {
		res.status(400).json({ error: "loanId is invalid" });
	}

	return res.status(200).json({
		success: true,
		data: {
			id,
			status: "approved",
			name: "Nguyễn Thị Ngọc Trinh",
			nationalId: "225925482",
			phoneNumber: "+84905761112",
			gender: 0,
			amount: 10000000,
			interestRate: 7.06,
			duration: 12,
			disbursedAt: new Date(2021, 10, 12),
			createdAt: new Date(2021, 10, 8),
		},
	});
}

handler.allowedMethods = ["GET"];

export default withMiddlewares(
	createCorsMiddleware(handler.allowedMethods),
	createMethodProtectMiddleware(handler.allowedMethods),
	handler
);
