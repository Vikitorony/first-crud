import { Router } from 'express';
import * as groupUserController from '../controllers/groupUser';

export const router: Router = Router({ mergeParams: true });

router.get('/group/:groupId/user', groupUserController.index);             // index
router.get('/group/:groupId/user/:id', groupUserController.show);          // show
router.post('/group/:groupId/user', groupUserController.create);           // create
router.put('/group/:groupId/user/:id', groupUserController.update);        // update
router.delete('/group/:groupId/user/:id', groupUserController.destroy);    // delete


// const groupUserCommentAttachmentController
// router.get('/group/:groupId/user/:userId/comment/:commentId/attachment/:attachmentId', groupUserCommentAttachmentController.show);