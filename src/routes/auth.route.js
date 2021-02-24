/* eslint-disable import/no-named-as-default-member */
import { Router } from 'express';
import AuthController from '../controllers/auth.controller';
import {
	checkIfEmailExist,
	checkUserCredentials,
} from '../middlewares/auth.middleware';
import {
	validateSignup,
	validateLoginBody
} from '../validations/auth.validation';

const router = Router();

router.post(
	'/signup',
	validateSignup,
	checkIfEmailExist,
	AuthController.signup
);
router.patch('/activate', AuthController.verifyUser);

router.post(
	'/login',
	validateLoginBody,
	checkUserCredentials,
	AuthController.login
);
router.get('/activate', AuthController.verifyUser);

export default router;
