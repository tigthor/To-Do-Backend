import ResponseService from '../services/response.service';
import TokenService from '../services/token.service';
import code from '../helpers/status-code.helper';

const protectRoute = (req, res, next) => {
	const bearerHeader = req.headers.authorization;
	if (typeof bearerHeader !== 'undefined') {
		const bearer = bearerHeader.split(' ');
		const bearerToken = bearer[1];
		req.token = bearerToken;
		const { name } = TokenService.verifyToken(req.token);
		if (name === 'JsonWebTokenError') {
			ResponseService.setError(
				code.unauthorized,
				'Unauthorized, invalid token'
			);
			return ResponseService.send(res);
		}
		if (name === 'TokenExpiredError') {
			ResponseService.setError(
				code.unauthorized,
				'Unauthorized, Token has expired signin again to get new token'
			);
			return ResponseService.send(res);
		}
		req.userData = TokenService.verifyToken(req.token);
		next();
	} else {
		ResponseService.setError(
			code.unauthorized,
			'You can not proceed without setting authorization token'
		);
		return ResponseService.send(res);
	}
};

export default protectRoute;
