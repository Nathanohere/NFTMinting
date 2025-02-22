import { Router } from 'express';
import galleryController from '../controller/galleryController';

const controller = new galleryController();

const router = Router();

router.get('/', controller.getData);

export default router;
