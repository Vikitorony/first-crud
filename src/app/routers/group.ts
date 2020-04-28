import { Router } from 'express';
import * as groupController from '../controllers/group';

export const router: Router = Router({ mergeParams: true });

router.use(groupController.authorization);
router.get('/', groupController.index);           // index
router.get('/:id', groupController.show);        // show
router.post('/', groupController.create);         // create
router.put('/:id', groupController.update);      // update
router.delete('/:id', groupController.destroy);  // delete