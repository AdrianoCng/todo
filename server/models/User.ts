import { DataTypes } from 'sequelize';
import sequelize from '../db';

export interface IUser {
  email: string;
  password: string;
}

const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default User;
