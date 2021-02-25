import ResponseService from '../services/response.service';
import code from '../helpers/status-code.helper';

export const validateCreateTodo = (req, res, next) => {
	const schema = Joi.object({
		title: Joi.string().required()
			.messages({
				'string.empty': 'title is not allowed to be empty',
				'any.required': 'title is required',
			}),
		description: Joi.string().required().messages({
			'any.required': 'description is required',
			'string.empty': 'description is not allowed to be empty',
		}),
		priority: Joi.string().valid('LOW', 'MEDIUM', 'HIGH').required().messages({
			'string.empty': 'priotity is not allowed to be empty',
			'any.required': 'priotity is required',
			'any.only': 'priority must be  LOW or MEDIUM or HIGH',
		}),
	}).options({ abortEarly: false });

	const { error } = schema.validate(req.body);
	if (error) {
		const errors = error.details.map((e) => e.message);
		ResponseService.setError(code.badEntity, errors);
		return ResponseService.send(res);
	}

	next();
};

export const validateUpdateTodo = (req, res, next) => {
	const schema = Joi.object({
		title: Joi.string()
			.optional()
			.messages({
				'string.empty': 'title is not allowed to be empty',
			}),
		description: Joi.string().optional().messages({
			'string.empty': 'description is not allowed to be empty',
		}),
		priority: Joi.string().valid('LOW', 'MEDIUM', 'HIGH').optional().messages({
			'string.empty': 'priotity is not allowed to be empty',
			'any.required': 'priotity is required',
			'any.only': 'priority must be  LOW or MEDIUM or HIGH',
		}),
	}).options({ abortEarly: false });

	const { error } = schema.validate(req.body);
	if (error) {
		const errors = error.details.map((e) => e.message);
		ResponseService.setError(code.badEntity, errors);
		return ResponseService.send(res);
	}
	next();
};

export const validateParam = (req, res, next) => {
	const schema = Joi.object({
		id: Joi.integer()
			.min(3)
			.max(30)
			.optional()
			.messages({
			}),
	}).options({ abortEarly: false });

	const { error } = schema.validate(req.body);
	if (error) {
		const errors = error.details.map((e) => e.message);
		ResponseService.setError(code.badEntity, errors);
		return ResponseService.send(res);
	}
	next();
};
