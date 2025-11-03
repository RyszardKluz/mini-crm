import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db.config.js';
import { UserAttributes as IUser } from '../interfaces/user.interface.js';
import { Customer } from './customer.model.js';

export class User extends Model<IUser> {
  declare id: string;
  declare email: string;
  declare name: string;
  declare password: string;
}

User.init(
  {
    id: { primaryKey: true, type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true },
    name: { allowNull: false, type: DataTypes.STRING },
    password: { allowNull: false, type: DataTypes.STRING },
  },

  { sequelize, timestamps: true },
);
