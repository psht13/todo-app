import { Response, Request, NextFunction, RequestHandler } from 'express';

export const tryCatchMiddleware = (
	controller: RequestHandler,
): RequestHandler => {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			controller(req, res, next);
		} catch (error) {
			next(error);
		}
	};
};
