import { param, query, body, oneOf } from 'express-validator';
import { handleValidationErrors } from './handleValidationErrors.js';
import { validateRole } from './userValidators.js';

export const validateReminderId = [
   param('id')
   .isInt({ min: 1 })
   .withMessage('Reminder id must be a positive integer'),
   handleValidationErrors,

];

const allowedSortFields = ['id', 'title', 'timeStart', 'createdAt'];
const allowedSortOrders = ['asc', 'desc'];

export const validateReminderQuery = [
    query('search')
      .optional()
      .isString()
      .withMessage('search must be a string'),
  
    query('sortBy')
      .optional()
      .isIn(allowedSortFields)
      .withMessage(`sortBy must be one of: ${allowedSortFields.join(', ')}`),
  
    query('sortOrder')
      .optional()
      .isIn(allowedSortOrders)
      .withMessage(`sortOrder must be one of: ${allowedSortOrders.join(', ')}`),
  
    query('limit')
      .optional()
      .isInt({ min: 1, max: 100 })
      .withMessage('limit must be between 1 and 100'),
  
    query('offset')
      .optional()
      .isInt({ min: 0 })
      .withMessage('offset must be 0 or a positive integer'),
  
    handleValidationErrors,
  ];

  
  export const validateCreateReminder = [
    body('title')
      .exists({ values: 'falsy' })
      .withMessage('title is required')
      .bail()
      .trim()
      .isString()
      .withMessage('title must be a string')
      .bail()
      .isLength({ min: 3 })
      .withMessage('title must be at least 3 characters'),
  
    body('details')
      .optional()
      .trim()
      .isString()
      .withMessage('details must be a string'),
  
    body('timeStart')
      .exists({ values: 'falsy' })
      .withMessage('timeStart is required')
      .bail()
      .isString()
      .withMessage('timeStart must be a string'),
  
    body('timeEnd')
      .optional()
      .isString()
      .withMessage('timeEnd must be a string'),
  
    handleValidationErrors,
  ];

  export const validateUpdateReminder = [
    oneOf(
      [
        body('title').exists({ values: 'falsy' }),
        body('details').exists({ values: 'falsy' }),
        body('timeStart').exists({ values: 'falsy' }),
        body('timeEnd').exists({ values: 'falsy' }),
        body('completed').exists({ values: 'falsy' }),
      ],
      {
        message:
          'At least one field (title, details, timeStart, timeEnd, completed) must be provided',
      }
    ),
  
    body('title')
      .optional()
      .trim()
      .isString()
      .withMessage('title must be a string')
      .bail()
      .isLength({ min: 3 })
      .withMessage('title must be at least 3 characters'),
  
    body('details')
      .optional()
      .trim()
      .isString()
      .withMessage('details must be a string'),
  
    body('timeStart')
      .optional()
      .isString()
      .withMessage('timeStart must be a string'),
  
    body('timeEnd')
      .optional()
      .isString()
      .withMessage('timeEnd must be a string'),
  
    body('completed')
      .optional()
      .isBoolean()
      .withMessage('completed must be true or false'),
  
    handleValidationErrors,
  ];
  
