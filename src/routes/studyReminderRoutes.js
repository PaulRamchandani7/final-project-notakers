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


const router = express.Router();

router.get('/', getAllRemindersHandler);

router.get('/:id', validateReminderId, getReminderHandler);

router.post('/', validateCreateReminder, createReminderHandler);

router.put('/:id', validateReminderId, validateUpdateReminder, updateReminderHandler);

router.delete('/:id', validateReminderId, deleteReminderHandler);

export default router;