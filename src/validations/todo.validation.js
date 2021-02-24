import ResponseService from '../services/response.service';

export const validateCreateTodo = (req, res, next) => {
	const schema = Joi.object({
		title: Joi.string().min(3).max(30).required()
			.messages({
				'string.empty': 'fullname is not allowed to be empty',
				'string.min': 'fullname length must be at least 3 characters long',
				'string.max':
        ' title length must be less than or equal to 30 characters long',
				'any.required': 'title is required',
			}),
		description: Joi.string().required().messages({
			'any.required': 'description is required',
			'string.empty': 'description is not allowed to be empty',
		}),
		priority: Joi.any().valid('LOW', 'MEDIUM', 'HIGH').required().messages({
			'string.empty': 'priotity is not allowed to be empty',
			'any.required': 'priotity is required',
			'any.only': 'priority must be  LOW or MEDIUM or HIGH',
		}),
	}).options({ abortEarly: false });

	const { error } = schema.validate(req.body);
	if (error) {
		const errors = error.details.map((e) => e.message);
		ResponseService.setError(ResponseService.statusCode.badEntity, errors);
		return ResponseService.send(res);
	}

	next();
};

export const validateUpdateTodo = (req, res, next) => {
	const schema = Joi.object({
		title: Joi.string()
			.min(3)
			.max(30)
			.optional()
			.messages({
				'string.empty': 'fullname is not allowed to be empty',
				'string.min': 'fullname length must be at least 3 characters long',
				'string.max':
            ' title length must be less than or equal to 30 characters long'
			}),
		description: Joi.string().optional().messages({
			'string.empty': 'description is not allowed to be empty',
		}),
		priority: Joi.any().valid('LOW', 'MEDIUM', 'HIGH').optional().messages({
			'string.empty': 'priotity is not allowed to be empty',
			'any.required': 'priotity is required',
			'any.only': 'priority must be  LOW or MEDIUM or HIGH',
		}),
	}).options({ abortEarly: false });

	const { error } = schema.validate(req.body);
	if (error) {
		const errors = error.details.map((e) => e.message);
		ResponseService.setError(ResponseService.statusCode.badEntity, errors);
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
		ResponseService.setError(ResponseService.statusCode.badEntity, errors);
		return ResponseService.send(res);
	}
	next();
};
