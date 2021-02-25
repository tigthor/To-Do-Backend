import Joi from 'joi';
import ResponseService from '../services/response.service';
import code from '../helpers/status-code.helper';

export const validateSignup = (req, res, next) => {
	const schema = Joi.object({
		fullname: Joi.string()
			.allow('')
			.trim()
			.strict()
			.min(3)
			.max(30)
			.required()
			.messages({
				'string.empty': 'fullname is not allowed to be empty',
				'string.min': 'fullname length must be at least 3 characters long',
				'string.max':
          ' fullname length must be less than or equal to 30 characters long',
				'any.required': 'fullname is required',
				'string.trim':
          'fullname must not have white spces at the beginning and at the end',
			}),
		email: Joi.string().email().required().messages({
			'string.email': 'Please enter a valid email address',
			'any.required': 'email is required',
			'string.empty': 'email is not allowed to be empty',
		}),
		password: Joi.string()
			.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
			.required()
			.messages({
				'string.pattern.base':
          'password should contain uppercase,lowercase,specialCharacter,and number',
				'any.required': 'password is required',
				'string.empty': 'password is not allowed to be empty',
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

/** }
 * @param {object} req
 * @param {object} res
 * @param {object} next
 * @return {object} this is going to validate Login Body
 */
export const validateLoginBody = (req, res, next) => {
	const schema = Joi.object({
		email: Joi.string().email().required().messages({
			'any.required': 'Email is required',
			'string.email': 'Email must be a valid email',
			'string.empty': 'Email must not be empty',
		}),
		password: Joi.string().required().messages({
			'any.required': 'Password is required',
			'string.empty': 'Password must not be empty',
		}),
	}).options({ abortEarly: false });

	const { error } = schema.validate(req.body);

	if (error) {
		const errors = error.details.map((err) => err.message);
		ResponseService.setError(code.badEntity, errors);
		return ResponseService.send(res);
	}
	next();
};
