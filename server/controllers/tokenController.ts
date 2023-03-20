import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { generateTokens } from '../helpers';

import RefreshToken from '../models/RefreshToken';

const tokenController = {
  refreshToken: async (req: Request, res: Response) => {
    const refreshToken: string = req.body.refreshToken;
    const userID = req.body.userID;

    const tokenInDB = await RefreshToken.findOne({ where: { userID } });

    if (!tokenInDB) {
      return res.sendStatus(403);
    }

    const secret = process.env.SECRET_REFRESH_TOKEN || '';
    jwt.verify(refreshToken, secret, (err) => {
      if (err) {
        return res.sendStatus(403);
      }

      const userID = tokenInDB.dataValues.userID;
      const email = tokenInDB.dataValues.email;

      const payload = {
        sub: userID,
        username: email,
      };

      const tokens = generateTokens(payload);

      res.status(200).json(tokens);
    });
  },
};

export default tokenController;
