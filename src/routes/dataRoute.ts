import { Router } from 'express';
import DataController from '../controller/dataController';

const controller = new DataController();

const router = Router();
router.post('/', controller.createData);

router.get('/:id', controller.getData);

export default router;
