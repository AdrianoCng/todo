import { Response } from 'express';

import { UserAuthRequest } from '../middlewares/authenticateJWT';
import RefreshToken from '../models/RefreshToken';

const logoutController = {
  logout: async (req: UserAuthRequest, res: Response) => {
    try {
      const user = req.user;

      const userID = user?.userID || '';

      const rows = await RefreshToken.destroy({ where: { userID } });

      if (!rows) {
        return res.status(403).send('Invalid Refresh Token');
      }

      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },
};

export default logoutController;
