import { Router } from 'express';
import * as userController from '../controllers/user';

export const router: Router = Router({ mergeParams: true });

router.get('/', userController.index);             // index
router.get('/:id', userController.show);          // show
router.post('/', userController.create);           // create
router.put('/:id', userController.update);        // update
router.delete('/:id', userController.destroy);    // delete