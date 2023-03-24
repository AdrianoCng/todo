import { DataTypes } from 'sequelize';
import sequelize from '../db';
import User from './User';

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

Todo.belongsTo(User, {
  foreignKey: 'userID',
});

console.log('log');

export default Todo;
