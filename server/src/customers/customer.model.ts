import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../core/config/db.config';
import { CustomerCreationAttributes } from './customer.interface';

export class Customer extends Model<CustomerCreationAttributes> {
  declare id: string;
  declare name: string;
  declare email: string;
  declare status: string;
  declare phone?: string;
  declare userId: string;
}

Customer.init(
  {
    id: { primaryKey: true, type: DataTypes.STRING },
    name: { allowNull: false, type: DataTypes.STRING },
    email: { allowNull: false, type: DataTypes.STRING },
    status: DataTypes.STRING,
    phone: DataTypes.STRING,
    userId: DataTypes.STRING,
  },
  { sequelize, modelName: 'Customer' },
);
