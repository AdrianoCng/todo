import { Request, Response } from 'express';
import { UserAuthRequest } from '../middlewares/authenticateJWT';
import Todo from '../models/Todo';

const todosController = {
  getAllTodos: async (req: UserAuthRequest, res: Response) => {
    try {
      const user = req.user;

      const todos = await Todo.findAll({ where: { userID: user?.userID } });

      res.json(todos);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },

  getById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const todo = await Todo.findByPk(id);

      if (!todo) {
        return res.sendStatus(404);
      }

      res.json(todo);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },

  create: async (req: UserAuthRequest, res: Response) => {
    try {
      const { title, completed } = req.body;

      const user = req.user;

      const newTodo = await Todo.create({ title, completed, userID: user?.userID });

      res.status(201).json(newTodo);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const deleted = await Todo.destroy({ where: { id } });

      if (!deleted) {
        return res.sendStatus(404);
      }

      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },

  updateOne: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { title, completed } = req.body;

      const [rowsUpdated] = await Todo.update({ title, completed }, { where: { id } });

      if (!rowsUpdated) {
        return res.sendStatus(404);
      }

      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },
};

export default todosController;
