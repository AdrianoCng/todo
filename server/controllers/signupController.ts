import { Request, Response } from 'express';
import User, { UserModel } from '../models/User';

const signupController = {
  signup: async (req: Request<unknown, unknown, UserModel>, res: Response) => {
    try {
      const email = req.body.email;
      const password = req.body.password;

      const userCreated = await User.create({
        email,
        password,
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
