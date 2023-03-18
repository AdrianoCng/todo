import { body } from 'express-validator';

export default {
  login: [
    body('email').not().isEmpty().isEmail().trim().normalizeEmail(),
    body('password').not().isEmpty().withMessage('Password required.'),
  ],
};
