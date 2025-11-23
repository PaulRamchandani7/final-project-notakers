import { handleValidationErrors } from './handleValidationErrors.js';
import { param, body } from 'express-validator';

export const validateSubjectId = [
    param('id')
    .isInt({ min: 1 })
    .withMessage('Subject id must be a positive integer'),
  handleValidationErrors,
];


export const validateCreateSubject = [
    body('name')
      .exists({ values: 'falsy' })
      .withMessage('name is required')
      .bail()
      .trim()
      .escape()
      .isString()
      .withMessage('name must be a string')
      .bail()
      .isLength({ min: 3 })
      .withMessage('name must be at least 3 characters'),
    handleValidationErrors,
  ];

export const validateUpdateSubject = [
    body('name')
      .exists({ values: 'falsy' })
      .withMessage('name is required')
      .bail()
      .trim()
      .escape()
      .isString()
      .withMessage('name must be a string')
      .bail()
      .isLength({ min: 3 })
      .withMessage('name must be at least 3 characters'),
    handleValidationErrors,
  ];

