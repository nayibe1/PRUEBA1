'use strict';

const jwt = require('jsonwebtoken');

function generateToken() {
	const token = jwt.sign({
    data: 'usuarios'
  }, 'medicos', { expiresIn: '2h' });

	return token;
}

function validate(token, cb) {
	try {
		const decoded = jwt.verify(token, 'medicos');
		if (decoded) {
			return cb(true, null);
		}

		return cb(false, null);
	} catch (err) {
		return cb(false, err);
	}
}

module.exports = { generateToken, validate };