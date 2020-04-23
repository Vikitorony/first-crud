import { Router } from 'express';
import * as groupController from '../controllers/group';

export const router: Router = Router({ mergeParams: true });

router.get('/group', groupController.index);           // index
router.get('/group/:id', groupController.show);        // show
router.post('/group', groupController.create);         // create
router.put('/group/:id', groupController.update);      // update
router.delete('/group/:id', groupController.destroy);  // delete