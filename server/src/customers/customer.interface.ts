import { Optional } from 'sequelize';

export interface CustomerAttributes {
  id: string;
  name: string;
  email: string;
  status: string;
  phone?: string;
  userId: string;
}

export type CustomerCreationAttributes = Optional<CustomerAttributes, 'id'>;
