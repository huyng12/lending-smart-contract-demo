import {
	createCorsMiddleware,
	createMethodProtectMiddleware,
	withMiddlewares,
} from "../../utils/middleware";

async function handler(_, res) {
	return res.status(200).json({
		version: "v1.0-alpha",
		message: "API is working",
	});
}

handler.allowedMethods = ["GET"];

export default withMiddlewares(
	createCorsMiddleware(handler.allowedMethods),
	createMethodProtectMiddleware(handler.allowedMethods),
	handler
);
