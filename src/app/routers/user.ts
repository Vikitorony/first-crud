import { Router } from 'express';
import * as userController from '../controllers/user';

export const router: Router = Router({ mergeParams: true });

router.get('/user', userController.index);             // index
router.get('/user/:id', userController.show);          // show
router.post('/user', userController.create);           // create
router.put('/user/:id', userController.update);        // update
router.delete('/user/:id', userController.destroy);    // delete