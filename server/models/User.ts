import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';

import sequelize from '../db';

export interface UserModel {
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
    set(val: string) {
      const hash = bcrypt.hashSync(val, 10);

      this.setDataValue('password', hash);
    },
  },
});

export default User;
