import { body } from 'express-validator';

export default {
  body: [
    body('email').not().isEmpty().isEmail().normalizeEmail().trim(),
    body('password').not().isEmpty().isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minNumbers: 1,
      minUppercase: 1,
      minSymbols: 1,
    }),
  ],
};
