import { Router } from 'express';

import tokenController from '../controllers/tokenController';
import validate from '../middlewares/validate';
import tokenRules from '../validations/tokenRules';

const tokenRouter = Router();

tokenRouter.post('/', validate(tokenRules.body), tokenController.refreshToken);

export default tokenRouter;
