import {
	createMethodProtectMiddleware,
	createCorsMiddleware,
	withMiddlewares,
} from "../../../utils/middleware";
import isUUID from "validator/lib/isUUID";

async function handler(req, res) {
	const id = req.query.id;

	if (typeof id === undefined || !isUUID(id, 4)) {
		res.status(400).json({ error: "loanId is invalid" });
	}

	return res.status(200).json({
		success: true,
		data: {
			isTampered: false,
		},
	});
}

handler.allowedMethods = ["POST"];

export default withMiddlewares(
	createCorsMiddleware(handler.allowedMethods),
	createMethodProtectMiddleware(handler.allowedMethods),
	handler
);
