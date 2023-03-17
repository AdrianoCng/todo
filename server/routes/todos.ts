import { Router } from 'express';

import todosController from '../controllers/todosController';
import validate from '../middlewares/validate';
import todosRules from '../validations/todosRules';

const todosRouter = Router();

todosRouter.get('/', todosController.getAllTodos);

todosRouter.get('/:id', validate(todosRules.id), todosController.getById);

todosRouter.post('/', validate(todosRules.body), todosController.create);

todosRouter.delete('/:id', validate(todosRules.id), todosController.delete);

todosRouter.put('/:id', validate(todosRules.id), validate(todosRules.body), todosController.updateOne);

export default todosRouter;
