import app from './app';
import { sequelize } from './core/config/db.config';
import { env } from './core/config/env.config';

const PORT = env.port;

export const startServer = () => {
  try {
    sequelize.authenticate();
    console.log('Connection to database has been established successfully');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log('Unable to connect to the server', (error as Error).message);
  }
};

startServer();
