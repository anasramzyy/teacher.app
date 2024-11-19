import joi from "joi"
// import { isValidObjectId } from "../../middleware/validation.middleware.js";


// // create subject
// export const createSubjectSchema = joi.object({
//   categoryId: joi.string().required(),
//   facultyId: joi.string().required(),
//   subjectName: joi.string().required(),
//   addCourse: joi.array().items(createCourseSchema).default([])
// })

// // update subject
// export const updateSubjectSchema = joi.object({
//   subjectName: joi.string().required(),
//   addCourse: joi.array().items(updateCourseSchema).default([])
// })

// // create year 
// export const createYearSchema = joi
//   .object({
//     categoryId: joi.string().required(),
//     facultyId: joi.string().required(),
//     yearName: joi.string()
//     .valid('1', '2', "3", '4')
//     .required(),
//     subject: joi.string(),
//     paid: joi.boolean(),
//     subject: joi.array().items(createSubjectSchema).default([])
//   })

// // update year
// export const updateYearSchema = joi.object({
//   yearName: joi.string()
//     .valid('1', '2', '3', '4')
//     .required(),
//   subject: joi.string()
//     .required(),
//   paid: joi.boolean(),
//   subject: joi.array().items(updateSubjectSchema).default([])
// })

// // create faculty 
// export const createFacultySchema = joi.object({
//   categoryId: joi.string().required(),
//   facultyName: joi.string().required(),
//   years: joi.array().items(createYearSchema).default([])
// })

// // update faculty 
// export const updateFacultySchema = joi.object({
//   categoryId: joi.string().required(),
//   facultyId: joi.string().required(),
//   facultyName: joi.string().required(),
//   years: joi.array().items(updateYearSchema).default([])
// })


// create category
export const createCategorySchema = joi.object({
  categoryName: joi.string().required(),
  facultyName: joi.string().required(),
  yearName: joi.string().required(),
  subjectName: joi.string(),
  paid: joi.boolean()
})
.required()

// update category
export const updateCategorySchema =  joi.object({
  id: joi.string(),
  categoryName: joi.string(),
  facultyName: joi.string().required(),
  yearName: joi.string().required(),
  subjectName: joi.string(),
  paid: joi.boolean()
})
.required()

// delete category
export const deleteCategorySchema = joi.object({
  id: joi.string().required(),
})


// // id schema
// const idSchema = joi.object({
//   id: joi.string().length(24).hex().required()
// })


// // Delete validation schemas
// const deleteCategorySchema = idSchema;
// // const deleteLectureSchema = joi.object({
//   categoryId: joi.string().required(),
//   facultyId: joi.string().required(),
// });

// Export the validation schemas
// export {
//   // idSchema,
//   deleteCategorySchema,
//   // deleteFacultySchema,
// };