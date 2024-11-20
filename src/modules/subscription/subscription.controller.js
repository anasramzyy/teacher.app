import { Subscription } from '../../../db/models/subscription.model.js';
import { Course } from '../../../db/models/course.model.js';
import { asyncHandler } from '../../utils/asyncHandler.js';

// Add a course subscription for a student
export const addCourseSubscription = asyncHandler(async (req, res) => {
  const { studentId, courseId } = req.body;

  // Check if the course exists
  const course = await Course.findById(courseId);
  if (!course) {
    return res.status(404).json({ message: 'Course not found.' });
  }

  // Check if the student is already subscribed to the course
  const existingSubscription = await Subscription.findOne({ studentId, courseId, status: 'active' });
  if (existingSubscription) {
    return res.status(400).json({ message: 'Student is already subscribed to this course.' });
  }

  // Create a new subscription
  const newSubscription = new Subscription({
    studentId,
    courseId,
    categoryId: course.categoryId, // Assuming you want to set these based on the course
    facultyId: course.facultyId,
    yearId: course.yearId,
  });

  await newSubscription.save();
  res.status(201).json({ success: true, result: newSubscription });
});

// Get all subscribed courses for a student
export const getSubscribedCourses = asyncHandler(async (req, res) => {
  const { studentId } = req.params;

  // Find all subscriptions for the student
  const subscriptions = await Subscription.find({ studentId }).populate('courseId');

  if (!subscriptions.length) {
    return res.status(404).json({ message: 'No subscribed courses found for this student.' });
  }

  res.status(200).json({ success: true, result: subscriptions });
});