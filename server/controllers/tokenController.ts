import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { generateTokens, TokenPayload } from '../helpers';

import RefreshToken from '../models/RefreshToken';

const tokenController = {
  refreshToken: async (req: Request, res: Response) => {
    const refreshToken: string = req.body.refreshToken;

    const secret = process.env.SECRET_REFRESH_TOKEN || '';
    jwt.verify(refreshToken, secret, async (err, decode) => {
      if (err || !decode) {
        return res.sendStatus(403);
      }

      const { userID, username } = decode as TokenPayload;

      const tokenInDB = await RefreshToken.findOne({ where: { userID } });

      if (!tokenInDB) {
        return res.sendStatus(403);
      }

      const payload = {
        userID,
        username,
      };

      const tokens = generateTokens(payload);

      res.status(200).json(tokens);
    });
  },
};

export default tokenController;
