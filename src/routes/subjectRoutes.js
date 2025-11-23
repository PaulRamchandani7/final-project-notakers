import express from 'express';
import {
    getAllSubjectsHandler,
    getSubjectHandler,
    createSubjectHandler,
    updateSubjectHandler,     
    deleteSubjectHandler
} from '../controllers/subjectController.js';
import { authenticate } from '../middleware/authenticate.js';
import { authorizeSubjectOwnership } from '../middleware/authorizeSubjectOwnership.js';
import {
    validateSubjectId,
    validateCreateSubject,
    validateUpdateSubject
} from '../middleware/subjectValidator.js';

const router = express.Router();

router.get('/', authenticate, getAllSubjectsHandler);
router.post('/', authenticate, validateCreateSubject, createSubjectHandler);
router.get('/:id', authenticate, validateSubjectId, authorizeSubjectOwnership, getSubjectHandler);
router.put('/:id', authenticate, validateSubjectId, authorizeSubjectOwnership, validateUpdateSubject, updateSubjectHandler);
router.delete('/:id', authenticate, validateSubjectId, authorizeSubjectOwnership, deleteSubjectHandler);


export default router;

