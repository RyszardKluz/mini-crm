import { Sequelize } from 'sequelize';
import { env } from './env.config.js';

export const sequelize = new Sequelize({
  database: env.db.name,
  host: env.db.host,
  username: env.db.user,
  password: env.db.password,
});

