import { Router } from 'express';
import { isValid } from '../../middleware/validation.middleware.js';
import { createLectureSchema, updateLectureSchema, deleteLectureSchema} from './lecture.validation.js'
import { createLecture, updateLecture, deleteLecture, allLectures, getLectureById } from './lecture.controller.js'
import { isAuthenticated } from "../../middleware/authentication.middleware.js"
import { isAuthorized } from "../../middleware/authorization.middleware.js"

const router = Router();

// create lecture
router.post("/", isAuthenticated, isAuthorized("teacher"), isValid(createLectureSchema), createLecture)

// update lecture
router.put("/:lectureId", isAuthenticated, isAuthorized("teacher"), isValid(updateLectureSchema), updateLecture)

// delete lecture
router.delete("/:lectureId", isAuthenticated, isAuthorized("teacher"), isValid(deleteLectureSchema), deleteLecture)

// get lectures
router.get("/", allLectures)

// get lecture by id
router.get("/:lectureId", getLectureById)

// Export the router
export default router;