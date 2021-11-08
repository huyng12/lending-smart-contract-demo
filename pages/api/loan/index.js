import {
	createMethodProtectMiddleware,
	createCorsMiddleware,
	withMiddlewares,
} from "../../utils/middleware";

async function handler(req, res) {
	if (req.method === "GET") {
		return res.status(200).json({
			success: true,
			data: [
				{
					id: "209cd60c-1814-4059-990d-7d01bc7d9950",
					status: null,
					name: "Nguyễn Minh Cường",
					nationalId: "224198812",
					phoneNumber: "+84905131002",
					gender: 1,
					amount: 45000000,
					interestRate: 7.06,
					duration: 6,
					disbursedAt: new Date(2021, 10, 12),
					createdAt: new Date(2021, 10, 8),
				},
				{
					id: "9f0883b6-862b-4cff-9b6f-91889a84b890",
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
				{
					id: "378dad5c-5183-4ec8-ae66-599b2696c2a5",
					status: "rejected",
					name: "Trần Minh An",
					nationalId: "225981231",
					phoneNumber: "+84907121331",
					gender: 0,
					amount: 12000000,
					interestRate: 7.06,
					duration: 24,
					disbursedAt: new Date(2021, 10, 12),
					createdAt: new Date(2021, 10, 8),
				},
			],
		});
	}

	return res.status(200).json({
		success: true,
		message: "Created loan successfully",
		loanId: "7c616c2f-f1b2-4171-8701-9cf88531bb9e",
	});
}

handler.allowedMethods = ["GET", "POST"];

export default withMiddlewares(
	createCorsMiddleware(handler.allowedMethods),
	createMethodProtectMiddleware(handler.allowedMethods),
	handler
);
