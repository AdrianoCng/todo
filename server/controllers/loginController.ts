import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/User';

const loginController = {
  login: async (req: Request, res: Response) => {
    try {
      const email = req.body.email;
      const password = req.body.password;

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(404).send('User does not exists.');
      }

      const matched = await bcrypt.compare(password, user.dataValues.password);

      if (!matched) {
        return res.status(403).send('Password do not match.');
      }

      const secret = process.env.SECRET_ACCESS_TOKEN || '';
      const accessToken = jwt.sign({ sub: user.dataValues.id, name: email }, secret);

      res.status(200).json({ accessToken });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },
};

export default loginController;
