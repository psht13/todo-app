import Joi from 'joi';

const maxTitleLength = 70;
const maxDescriptionLength = 400;

export const todoSchema = Joi.object({
	title: Joi.string().trim().max(maxTitleLength).required(),
	content: Joi.string().trim().max(maxDescriptionLength).required(),
	isPrivate: Joi.boolean().required(),
});
