import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { authRoutes } from './auth/auth.routes';
import { errorHandler } from './core/middlewares/error.middleware';

const app = express();

app.use(helmet());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(morgan('dev'));

app.use('/auth', authRoutes);
app.use(errorHandler);

export default app;
