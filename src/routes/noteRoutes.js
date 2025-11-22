import express from  'express';
import {
    createNoteHandler,
    deleteNoteHandler,
    getAllNotesHandler,
    getNoteHandler,
    updateNoteHandler
} from '../controllers/noteController.js';

import { authenticate } from '../middleware/authenticate.js';
import { authorizeOwnership } from '../middleware/authorizeOwnership.js';
import { 
    validateNoteId,
    validateCreateNote,
    validateUpdateNote
} from '../middleware/noteValidators.js';
 

const router = express.Router();

router.get('/', authenticate, getAllNotesHandler);
router.post('/', authenticate, validateCreateNote,createNoteHandler);
router.get('/:id', validateNoteId, authenticate, authorizeOwnership, getNoteHandler);
router.put('/:id', validateNoteId, authenticate, authorizeOwnership,validateUpdateNote, updateNoteHandler);
router.delete('/:id', validateNoteId, authenticate, authorizeOwnership, deleteNoteHandler);

export default router;
