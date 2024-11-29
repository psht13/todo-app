import { NextFunction, RequestHandler, Response, Request } from 'express';
import { ObjectSchema } from 'joi';

export const validatorMiddleware = (schema: ObjectSchema): RequestHandler => {
	return (
		req: Request,
		res: Response,
		next: NextFunction,
	): void | Response => {
		const { error } = schema.validate(req.body);

		if (error) {
			return res.status(400).json({ error: error.details[0].message });
		}

		next();
	};
};
