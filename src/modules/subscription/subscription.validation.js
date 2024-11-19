// import Joi from 'joi';

// // Subscription Validation Schema
// export const subscriptionSchema = Joi.object({
//   studentId: Joi.string()
//     .required()
//     .messages({
//       'string.base': 'Student ID must be a string.',
//       'string.empty': 'Student ID is required.',
//       'any.required': 'Student ID is required.',
//     }),
//   categoryId: Joi.string()
//     .required()
//     .messages({
//       'string.base': 'Category ID must be a string.',
//       'string.empty': 'Category ID is required.',
//       'any.required': 'Category ID is required.',
//     }),
//   facultyId: Joi.string()
//     .required()
//     .messages({
//       'string.base': 'Faculty ID must be a string.',
//       'string.empty': 'Faculty ID is required.',
//       'any.required': 'Faculty ID is required.',
//     }),
//   yearId: Joi.string()
//     .required()
//     .messages({
//       'string.base': 'Year ID must be a string.',
//       'string.empty': 'Year ID is required.',
//       'any.required': 'Year ID is required.',
//     }),
//   courseId: Joi.string()
//     .required()
//     .messages({
//       'string.base': 'Course ID must be a string.',
//       'string.empty': 'Course ID is required.',
//       'any.required': 'Course ID is required.',
//     }),
//   subscriptionDate: Joi.date()
//     .optional()
//     .messages({
//       'date.base': 'Subscription date must be a valid date.',
//     }),
//   status: Joi.string()
//     .valid('active', 'inactive', 'cancelled')
//     .default('active')
//     .messages({
//       'string.base': 'Status must be a string.',
//       'any.only': 'Status must be one of active, inactive, or cancelled.',
//     }),
// });