import { Optional } from 'sequelize';

export interface CustomerAttributes {
  id: string;
  name: string;
  email: string;
  status: string;
  phone?: number;
  userId: string;
}

export type CustomerCreationAttributes = Optional<CustomerAttributes, 'id'>;
