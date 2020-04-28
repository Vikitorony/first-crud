import { Router } from 'express';
import * as groupUserController from '../controllers/groupUser';

export const router: Router = Router({ mergeParams: true });

router.get('/', groupUserController.index);             // index
router.get('/:id', groupUserController.show);          // show
router.post('/', groupUserController.create);           // create
router.put('/:id', groupUserController.update);        // update
router.delete('/:id', groupUserController.destroy);    // delete


// const groupUserCommentAttachmentController
// router.get('/:userId/comment/:commentId/attachment/:attachmentId', groupUserCommentAttachmentController.show);