import { Router } from 'express';

import loginController from '../controllers/loginController';
import validate from '../middlewares/validate';
import loginRules from '../validations/loginRules';

const loginRouter = Router();

loginRouter.post('/', validate(loginRules.login), loginController.login);

export default loginRouter;
