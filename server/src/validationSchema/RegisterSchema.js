import { check } from 'express-validator';

export const RegisterSchema = [
	check('name').trim().isAlpha().withMessage('Name should be in alphabates only'),

	check('username', 'username is required').exists().isAlphanumeric().withMessage('username should be in alphanumeric characters only'),

	check('password', 'password is required').isLength({ min: 6, max: 30 }).trim(),

	check('email', 'email is required').exists().isEmail()
];
