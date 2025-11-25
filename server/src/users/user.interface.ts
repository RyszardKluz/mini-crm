import { Optional } from 'sequelize';

export interface UserAttributes {
  id: string;
  email: string;
  name: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type UserCreationAttributes = Optional<UserAttributes, 'id'>;
