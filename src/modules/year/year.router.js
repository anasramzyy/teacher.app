import { Router } from "express";
import { isValid } from "../../middleware/validation.middleware.js"
import { 
  createCategorySchema,
  updateCategorySchema,
  deleteCategorySchema,
  // createFacultySchema,
  // updateFacultySchema,
  // deleteFacultySchema,
  // createYearSchema,
  // updateYearSchema,
  // deleteYearSchema
  } from "./year.validation.js";
import { isAuthenticated } from "../../middleware/authentication.middleware.js"
import { isAuthorized } from "../../middleware/authorization.middleware.js"
import { 
  createCategory,
  updateCategory,
  deleteCategory,
  // createFaculty,
  // updateFaculty,
  // deleteFaculty,
  // createYear,
  // updateYear,
  // deleteYear,
  getCategories,
  getCategoryById,
  // getFaculties,
  // getYears
} from "./year.controller.js"
import lectureRouter from './../lecture/lecture.router.js'
// import subscriptionRouter from './../subscription/subscription.router.js'

const router = Router()


router.use("/:yearId/lecture", lectureRouter)
// router.use("/:yearId/subscription", subscriptionRouter)

// Categories Routes
router.post('/', isAuthenticated, isAuthorized("teacher"), isValid(createCategorySchema), createCategory);
router.put('/:id', isAuthenticated, isAuthorized("teacher"), isValid(updateCategorySchema), updateCategory);
router.delete('/:id', isAuthenticated, isAuthorized("teacher"), isValid(deleteCategorySchema), deleteCategory);
router.get('/', getCategories);
router.get('/:id', getCategoryById)

// // Faculties Routes
// router.post('/', isAuthenticated, isAuthorized("teacher"), isValid(createFacultySchema), createFaculty);
// router.put('/:categoryId/:facultyId', isAuthenticated, isAuthorized("teacher"), isValid(updateFacultySchema), updateFaculty);
// router.delete('/:categoryId/:facultyId', isAuthenticated, isAuthorized("teacher"), isValid(deleteFacultySchema), deleteFaculty);
// router.get('/:categoryId', isAuthenticated, isAuthorized("teacher"), getFaculties); // Get faculties by category

// // Years Routes
// router.post('/:categoryId/:facultyId', isValid(createYearSchema), createYear);
// router.put('/:categoryId/:facultyId/:yearId', isAuthenticated, isAuthorized("teacher"), isValid(updateYearSchema), updateYear);
// router.delete('/:categoryId/:facultyId/:yearId', isAuthenticated, isAuthorized("teacher"), isValid(deleteYearSchema), deleteYear);
// router.get('/:categoryId/:facultyId', isAuthenticated, isAuthorized("teacher"), getYears); // Get years by faculty


export default router