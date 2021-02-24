/* eslint-disable import/prefer-default-export */
/* eslint-disable no-underscore-dangle */
import ResponseService from '../services/response.service';
import UserService from '../services/user.service';
import BcryptService from '../services/bcrypt.service';
import code from '../helpers/status-code.helper';

/**
 * @param {object} req
 * @param {object} res
 * @param {object} next
 * @return {object} this is going to verify a user
 */
export const checkIfEmailExist = async (req, res, next) => {
	const user = await UserService.findUserByAttribute({ email: req.body.email });
	if (user) {
		ResponseService.setError(
			code.conflict,
			'email is already exist'
		);
		return ResponseService.send(res);
	}
	next();
};

/**
 * @param {object} req
 * @param {object} res
 * @param {object} next
 * @return {object} this is going to check if creadentials exist
 */
export const checkUserCredentials = async (req, res, next) => {
	const user = await UserService.findUserByAttribute({ email: req.body.email });
	if (!user) {
		ResponseService.setError(
			code.badRequest,
			'email not registered'
		);
		return ResponseService.send(res);
	}
	const userIsVerified = await UserService.findUserByAttribute({
		email: req.body.email,
		isVerified: true,
	});
	if (!userIsVerified) {
		ResponseService.setError(
			code.unauthorized,
			'account is not verified'
		);
		return ResponseService.send(res);
	}

	if (!BcryptService.comparePassword(req.body.password, user.password)) {
		ResponseService.setError(
			code.unauthorized,
			'Invalid email or password'
		);
		return ResponseService.send(res);
	}
	next();
};
