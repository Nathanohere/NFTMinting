import { RequestHandler } from 'express';
import asyncHandler from 'express-async-handler';
import AppError from '../utils/appError';
import dataService from '../service/dataService';

class DataController {
  createData: RequestHandler = asyncHandler(async (req, res, next) => {
    const data = req.body;
    const newData = await dataService.createOne(data);
    res.status(201).json({
      status: 'success',
      data: {
        data: newData,
      },
    });
  });

  getData: RequestHandler = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const data = await dataService.getOne(id);
    if (!data) {
      return next(new AppError('No document exists with that Id', 404));
    }
    res.status(200).json({
      status: 'success',
      data,
    });
  });
}

export default DataController;
