import { Router } from 'express';

import logoutController from '../controllers/logoutController';
import authenticateJWT from '../middlewares/authenticateJWT';

const logoutRouter = Router();

logoutRouter.post('/', authenticateJWT, logoutController.logout);

export default logoutRouter;
