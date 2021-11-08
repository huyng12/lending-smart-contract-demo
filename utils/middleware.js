import Bluebird from "bluebird";
import Cors from "cors";

export function withMiddlewares(...middlewares) {
	return (req, res) => {
		return Bluebird.mapSeries(
			middlewares,
			(handler) =>
				new Promise((resolve, reject) => {
					handler(req, res, (result) => {
						if (result instanceof Error) return reject(result);
						return resolve(result);
					});
				})
		);
	};
}

export function createCorsMiddleware(allowedMethods) {
	return Cors({
		methods: [...allowedMethods, "HEAD", "OPTIONS"],
	});
}

export function createMethodProtectMiddleware(methods) {
	return (req, res, next) => {
		if (methods.includes(req.method)) {
			return next();
		}
		return res.status(400).json({ error: "This method is not allowed" });
	};
}
