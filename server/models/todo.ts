import { DataTypes } from 'sequelize';
import sequelize from '../db';

export interface TodoModel {
  title: string;
  completed?: boolean;
}

const Todo = sequelize.define('Todo', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
});

export default Todo;
