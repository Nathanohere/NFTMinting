import Data from '../model/dataModel';
import asyncHandler from 'express-async-handler';
import galleryService from '../service/galleryService';
import AppError from '../utils/appError';

class galleryController {
  getData = asyncHandler(async (req, res, next) => {
    // const data = await Data.findById(req.params.id);
    const data = await galleryService.getAll();
    if (!data) {
      return next(new AppError('No document exists with that Id', 404));
    }
    res.status(200).json({
      status: 'success',
      data,
    });
  });
}

export default galleryController;
