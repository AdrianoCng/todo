import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export interface UserAuthRequest extends Request {
  user?: unknown;
}

export default (req: UserAuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.sendStatus(401);
  }

  const accessToken = authHeader.split(' ')[1];

  const secretAccessToken = process.env.SECRET_ACCESS_TOKEN || '';

  jwt.verify(accessToken, secretAccessToken, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    req.user = user;

    next();
  });
};
