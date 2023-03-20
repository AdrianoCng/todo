import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import User from '../models/User';
import RefreshToken from '../models/RefreshToken';
import { generateTokens } from '../helpers';

const loginController = {
  login: async (req: Request, res: Response) => {
    try {
      const email = req.body.email;
      const password = req.body.password;

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(404).send('User does not exists.');
      }

      const userID = user.dataValues.id;
      const userPassword = user.dataValues.password;

      const matched = await bcrypt.compare(password, userPassword);

      if (!matched) {
        return res.status(403).send('Password do not match.');
      }

      const payload = {
        userID,
        username: email,
      };

      const { accessToken, refreshToken } = generateTokens(payload);

      RefreshToken.destroy({ where: { userID } });

      await RefreshToken.create({
        userID,
        userName: email,
        refreshToken,
      });

      res.status(200).json({ accessToken, refreshToken });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },
};

export default loginController;
