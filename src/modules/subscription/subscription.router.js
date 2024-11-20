import { Router } from "express";
import { isAuthenticated } from "../../middleware/authentication.middleware.js"
import { isAuthorized } from "../../middleware/authorization.middleware.js"
import { addCourseSubscription, getSubscribedCourses } from './subscription.controller.js';
import { isValid } from '../../middleware/validation.middleware.js'; 
import { subscriptionSchema } from './subscription.validation.js'; 

const router = Router()

// Export the router
export default router

// POST endpoint to add a course subscription for a student
router.post('/subscribe', isAuthenticated, isAuthorized("admin"), isValid(subscriptionSchema), addCourseSubscription);

// GET endpoint to get all subscribed courses for a student
router.get('/subscribed-courses/:studentId', isAuthenticated, isAuthorized("admin"), getSubscribedCourses);
;
