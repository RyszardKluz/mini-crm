import { Sequelize } from 'sequelize';
import { env } from './env.config';

export const sequelize = new Sequelize({
  database: env.db.name,
  host: env.db.host,
  username: env.db.user,
  password: env.db.password,
});
