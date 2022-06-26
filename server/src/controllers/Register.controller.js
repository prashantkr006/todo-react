import { validationResult } from 'express-validator';

const Register = (req, res) => {
	const errors = validationResult(req);
	if (errors.isEmpty()) {
	}
	res.json();
	res.send(errors);
};

export default Register;
