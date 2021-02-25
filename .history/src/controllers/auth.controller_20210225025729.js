import BcryptService from '../services/bcrypt.service';
import TokenService from '../services/token.service';
import MailService from '../services/mail.service';
import ResponseService from '../services/response.service';
import UserService from '../services/user.service';

/**
 * This is the authentication class
 */
class AuthController {
	/**
   * @param {object} req
   * @param {object} res
   * @return {object} this is going to create a user
   */
	static async signup(req, res) {
		console.log(req.body);
		const newUser = await UserService.createUser({
			fullname: req.body.fullname,
			email: req.body.email,
			password: BcryptService.hashPassword(req.body.password),
			gender: req.body.gender,
			isVerified: fals
		});
		// conso
		MailService.sendMail(
			req.body.fullname,
			req.body.email,
			TokenService.generateToken({
				email: req.body.email,
			})
		);

		const userData = {
			id: newUser.id,
			fullname: newUser.fullname,
			email: newUser.email,
			gender: newUser.gender,
			createdAt: newUser.createdAt,
			updatedAt: newUser.updatedAt,
		};

		ResponseService.setSuccess(201, 'User Successfully Created', {
			user: userData,
			token: TokenService.generateToken(userData),
		});
		return ResponseService.send(res);
	}

	/**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} the user will login successfully
   */
	static async login(req, res) {
		const user = await UserService.findUserByAttribute({
			email: req.body.email,
		});
		const userData = { ...user.dataValues };
		delete userData.password;
		ResponseService.setSuccess(200, 'successfully logged in', {
			token: TokenService.generateToken(userData),
		});
		return ResponseService.send(res);
	}

	/**
   * @param {object} req
   * @param {object} res
   * @return {object} this is going to verify a user
   */
	static async verifyUser(req, res) {
		const decodedToken = await TokenService.verifyToken(req.query.token);
		UserService.updateUserByAttribute(
			{ email: decodedToken.email },
			{ isVerified: true }
		);
		ResponseService.setSuccess(200, 'User Successfully verified');
		return ResponseService.send(res);
	}
}

export default AuthController;
