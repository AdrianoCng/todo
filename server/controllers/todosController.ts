import { Request, Response } from 'express';

import Todo, { ITodo } from '../models/todo';

const todosController = {
  getAllTodos: async (_: Request, res: Response) => {
    try {
      const todos = await Todo.findAll();

      res.json(todos);
    } catch (error) {
      console.log(error);
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

  create: async (req: Request<unknown, unknown, ITodo>, res: Response) => {
    try {
      const { title, completed } = req.body;

      const newTodo = await Todo.create({ title, completed });

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
