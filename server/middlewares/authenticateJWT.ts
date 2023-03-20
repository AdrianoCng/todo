import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { TokenPayload } from '../helpers';

export interface UserAuthRequest extends Request {
  user?: TokenPayload;
}

export default (req: UserAuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.sendStatus(403);
  }

  const accessToken = authHeader.split(' ')[1];

  const secretAccessToken = process.env.SECRET_ACCESS_TOKEN || '';

  jwt.verify(accessToken, secretAccessToken, (err, user) => {
    if (err || !user) {
      return res.sendStatus(403);
    }

    req.user = user as TokenPayload;

    next();
  });
};
