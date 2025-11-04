import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db.config.js';
import { CustomerAttributes as ICustomer } from '../interfaces/customer.interface.js';

export class Customer extends Model<ICustomer> {
  declare id: string;
  declare name: string;
  declare email: string;
  declare status: string;
  declare phone?: number;
  declare userId: string;
}

Customer.init(
  {
    id: { primaryKey: true, type: DataTypes.STRING },
    name: { allowNull: false, type: DataTypes.STRING },
    email: { allowNull: false, type: DataTypes.STRING },
    status: DataTypes.STRING,
    phone: DataTypes.NUMBER,
    userId: DataTypes.STRING,
  },
  { sequelize, modelName: 'Customer' },
);
