import express from 'express';
import { 
  deleteUserHandler, 
  getAllUsersHandler, 
  getCurrentUser, 
  getUserNotesHandler, 
  updateCurrentUserHandler, 
  updateUserRoleHandler 
} from '../controllers/userController.js';

import { authenticate } from '../middleware/authenticate.js';
import { authorizeRoles } from '../middleware/authorizeRoles.js';
import { validateRole, validateUpdatedUser } from '../middleware/userValidators.js';

const router = express.Router();

router.get('/', authenticate, authorizeRoles('ADMIN'), getAllUsersHandler);

router.get('/me', authenticate, getCurrentUser);

router.put('/me', authenticate, validateUpdatedUser, updateCurrentUserHandler);

router.delete('/me', authenticate, deleteUserHandler);

router.get('/me/notes', authenticate, getUserNotesHandler);

router.patch('/:id/role', authenticate, authorizeRoles('ADMIN'), validateRole, updateUserRoleHandler);

export default router;
