import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../core/config/db.config';
import { UserAttributes, UserCreationAttributes } from './user.interface';

export class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
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
