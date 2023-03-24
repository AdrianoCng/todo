import { body } from 'express-validator';
import bcrypt from 'bcrypt';

import User from '../models/User';

export default {
  login: [
    body('email')
      .not()
      .isEmpty()
      .withMessage('Email is required')
      .isEmail()
      .withMessage('Please insert a valid email')
      .trim()
      .normalizeEmail(),
    body('password')
      .not()
      .isEmpty()
      .withMessage('Password is required')
      .custom(async (password, { req }) => {
        const email = req.body.email;

        const user = await User.findOne({ where: { email } });

        if (!user) {
          throw new Error('Invalid email or password');
        }

        const userPassword = user.dataValues.password;

        const matched = await bcrypt.compare(password, userPassword);

        if (!matched) {
          throw new Error('Invalid email or password');
        }

        return true;
      }),
  ],
};
