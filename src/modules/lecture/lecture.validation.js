import joi from 'joi';
import { isValidObjectId } from './../../middleware/validation.middleware.js'

// create lecture
export const createLectureSchema = joi.object({
  categoryId: joi.string().required(),
  lecture: [{
    createdBy: joi.string().custom(isValidObjectId),
    name: joi.string().required(),
    videoLink: joi.array().items().default([]),
    recordLink: joi.array().items().default([]),
    fileLink: joi.array().items().default([]),
}]
})

// update lecture
export const updateLectureSchema = joi.object({
  categoryId: joi.string().required(),
  lectureId: joi.string(),
  lecture: [{
    name: joi.string().required(),
    videoLink: joi.array().items().default([]),
    recordLink: joi.array().items().default([]),
    fileLink: joi.array().items().default([]),
}]
})


// Delete Validation Schema
export const deleteLectureSchema = joi.object({
  lectureId: joi.string(),
})

// // Export the validation schemas
// export {
//   createLectureSchema,
//   updateLectureSchema,
// };