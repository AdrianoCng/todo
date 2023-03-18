import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User';

const signupController = {
  signup: async (req: Request, res: Response) => {
    try {
      const email = req.body.email;
      const password = req.body.password;

      delete req.body.password;

      const user = await User.findOne({ where: { email } });

      if (user) {
        return res.sendStatus(409);
      }

      const hash = await bcrypt.hash(password, 10);

      const userCreated = await User.create({
        email,
        password: hash,
      });

      if (!userCreated) {
        return res.sendStatus(500);
      }

      res.status(201).json(userCreated);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },
};

export default signupController;
