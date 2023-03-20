import jwt from 'jsonwebtoken';

export interface TokenPayload {
  userID: number;
  email: string;
}

export const generateTokens = (payload: TokenPayload) => {
  const secretAccessToken = process.env.SECRET_ACCESS_TOKEN || '';
  const secretRefreshToken = process.env.SECRET_REFRESH_TOKEN || '';

  const accessToken = jwt.sign(payload, secretAccessToken, { expiresIn: '5m' });
  const refreshToken = jwt.sign(payload, secretRefreshToken, { expiresIn: '30d' });

  return { accessToken, refreshToken };
};
