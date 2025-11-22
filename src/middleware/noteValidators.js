import { param, query, body, oneOf } from 'express-validator';
import { handleValidationErrors } from './handleValidationErrors.js';

export const validateNoteId = [
    param('id')
    .isInt({ min: 1 })
    .withMessage('Note id must be a positive integer'),
  handleValidationErrors,
];

/* export const validateNoteQueryParams = [
    oneOf([
        query('title').exists(),
        query('content').exists(),
        query('userId').exists()
    ], 'At least one query parameter (title, content, userId) must be provided'),
    query('title')
        .optional()
        .isString()
        .withMessage('Title must be a string'),
    query('content')
        .optional()
        .isString()
        .withMessage('Content must be a string'),
    query('userId')
        .optional()
        .isInt({ min: 1 })
        .withMessage('User ID must be a positive integer'),
    handleValidationErrors,
]; */

export const validateCreateNote = [
    body('title')
      .exists({ values: 'falsy' })
      .withMessage('title is required')
      .bail()
      .trim()
      .escape()
      .isString()
      .withMessage('title must be a string')
      .bail()
      .isLength({ min: 3 })
      .withMessage('title must be at least 3 characters'),
  
    body('content')
      .exists({ values: 'falsy' })
      .withMessage('content is required')
      .bail()
      .trim()
      .escape()
      .isString()
      .withMessage('content must be a string')
      .bail()
      .isLength({ min: 10 })
      .withMessage('content must be at least 10 characters'),

  
    handleValidationErrors,
  ];


export const validateUpdateNote = [
    oneOf([
        body('title').exists(),
        body('content').exists()
    ], 'At least one field (title or content) must be provided'),
  
    body('title')
      .optional()
      .trim()
      .escape()
      .isString()
      .withMessage('title must be a string')
      .bail()
      .isLength({ min: 3 })
      .withMessage('title must be at least 3 characters'),
  
    body('content')
      .optional()
      .trim()
      .escape()
      .isString()
      .withMessage('content must be a string')
      .bail()
      .isLength({ min: 10 })
      .withMessage('content must be at least 10 characters'),
  
    handleValidationErrors,
  ];
