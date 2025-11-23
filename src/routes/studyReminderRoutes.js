import express from 'express';

import {
    validateReminderId,
    validateCreateReminder,
    validateUpdateReminder,
  } from '../middleware/studyReminderValidators.js';
  
import {
  getAllRemindersHandler,
  getReminderHandler,
  createReminderHandler,
  updateReminderHandler,
  deleteReminderHandler,
} from '../controllers/studyReminderController.js';

import { authenticate } from '../middleware/authenticate.js';

const router = express.Router();

router.get('/', authenticate, getAllRemindersHandler);

router.get('/:id', authenticate, validateReminderId, getReminderHandler);

router.post('/', authenticate, validateCreateReminder, createReminderHandler);

router.put('/:id', authenticate, validateReminderId, validateUpdateReminder, updateReminderHandler);

router.delete('/:id', authenticate, validateReminderId, deleteReminderHandler);

export default router;
