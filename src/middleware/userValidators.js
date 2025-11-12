import { handleValidationErrors } from './handleValidationErrors.js';
import { body} from 'express-validator';

export const validateUser = [
    body('email')
    .exists({values: 'false'})
    .withMessage('email is required')
    .bail()
    .isEmail()
    .withMessage('email is not valid')
    .normalizeEmail(),


    body('password')
    .exists({values: 'false'})
    .withMessage('password is required')
    .bail()
    .isLength({min: 8, max: 64})
    .withMessage('password must contain at least 8 characters and at most 64 chracters'),


    handleValidationErrors,

]


export const validateUpdatedUser = [

    body('email')
    .optional({values: 'false'})
    .isEmail()
    .withMessage('email is not valid')
    .normalizeEmail(),

    body('password')
    .optional({values: 'false'})
    .isLength({min: 8, max: 64})
    .withMessage('password must contain at least 8 characters and at most 64 chracters'),

    handleValidationErrors, 

]
export const validateRole =  [ 
    
    body('role')
    .exists({values: 'false'})
    .withMessage('role is required')
    .bail()
    .isIn(['USER', 'ADMIN'])
    .withMessage('role is invalid'),

    handleValidationErrors,

]
