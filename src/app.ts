import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import asyncHandler from 'express-async-handler';

import AppError from './utils/appError';
import dataRouter from './routes/dataRoute';
import galleryRouter from './routes/galleryRoute';
import globalErrorHandler from './middleware/errorHandler';

const app = express();

// BOdy parser
app.use(express.json());

app.use(morgan('dev'));

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP. Please try again later',
});

app.use('/api', limiter);

app.use(helmet());

app.use('/api/v1/data', dataRouter);
app.use('/api/v1/gallery', galleryRouter);

app.use('*', (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

export default app;
