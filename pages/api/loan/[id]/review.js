import {
	createMethodProtectMiddleware,
	createCorsMiddleware,
	withMiddlewares,
} from "../../../utils/middleware";
import isUUID from "validator/lib/isUUID";

async function handler(req, res) {
	const id = req.query.id;
	const status = req.body.status;

	if (typeof id === undefined || !isUUID(id, 4)) {
		return res.status(400).json({ error: "loanId is invalid" });
	}

	if (
		typeof status === undefined ||
		!["approved", "rejected"].includes(status)
	) {
		return res.status(400).json({ error: "status is invalid" });
	}

	return res.status(200).json({ success: true });
}

handler.allowedMethods = ["POST"];

export default withMiddlewares(
	createCorsMiddleware(handler.allowedMethods),
	createMethodProtectMiddleware(handler.allowedMethods),
	handler
);
