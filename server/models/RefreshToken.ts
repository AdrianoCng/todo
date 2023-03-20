import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';

import sequelize from '../db';
import User from './User';

const RefreshToken = sequelize.define('RefreshToken', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  refreshToken: {
    type: DataTypes.STRING,
    allowNull: false,
    set(val: string) {
      const token = bcrypt.hashSync(val, 10);

      this.setDataValue('refreshToken', token);
    },
  },
});

RefreshToken.belongsTo(User, {
  foreignKey: 'userID',
});

export default RefreshToken;
