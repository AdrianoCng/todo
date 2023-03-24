import { Request, Response } from 'express';

import User from '../models/User';
import RefreshToken from '../models/RefreshToken';
import { generateTokens } from '../helpers';

const loginController = {
  login: async (req: Request, res: Response) => {
    try {
      const email = req.body.email;

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(404).json({
          errors: [
            {
              msg: 'User does not exists',
            },
          ],
        });
      }

      const userID = user.dataValues.id;

      const payload = {
        userID,
        email,
      };

      const { accessToken, refreshToken } = generateTokens(payload);

      RefreshToken.destroy({ where: { userID } });

      await RefreshToken.create({
        userID,
        email,
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
