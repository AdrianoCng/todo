import { body } from 'express-validator';

export default {
  body: [
    body('email')
      .not()
      .isEmpty()
      .withMessage('Email is required')
      .isEmail()
      .withMessage('Not a valid email')
      .normalizeEmail()
      .trim(),
    body('password')
      .not()
      .isEmpty()
      .withMessage('Password is required')
      .isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minNumbers: 1,
        minUppercase: 1,
        minSymbols: 1,
      })
      .withMessage(
        'Password must be atleast 8 characters long and include one number, one lowercase, one uppercase and one symbol'
      ),
    body('confirmPassword')
      .exists()
      .custom((value, { req }) => value === req.body.password)
      .withMessage('Password do not match'),
  ],
};
