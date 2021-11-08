import {
	createMethodProtectMiddleware,
	createCorsMiddleware,
	withMiddlewares,
} from "../../utils/middleware";

async function handler(_, res) {
	return res.status(200).json({
		success: true,
		message: "Created loan successfully",
		loanId: "7c616c2f-f1b2-4171-8701-9cf88531bb9e",
	});
}

handler.allowedMethods = ["POST"];

export default withMiddlewares(
	createCorsMiddleware(handler.allowedMethods),
	createMethodProtectMiddleware(handler.allowedMethods),
	handler
);
