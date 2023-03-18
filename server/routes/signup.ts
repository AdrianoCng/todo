import { Router } from 'express';
import signupController from '../controllers/signupController';
import validate from '../middlewares/validate';
import signupRules from '../validations/signupRules';

const signupRouter = Router();

signupRouter.post('/', validate(signupRules.body), signupController.signup);

export default signupRouter;
