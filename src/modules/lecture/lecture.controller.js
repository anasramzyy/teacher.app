import { Lecture } from '../../../db/models/lecture.model.js'
import { asyncHandler } from '../../utils/asyncHandler.js';

// Create a new lecture
export const createLecture = asyncHandler(async (req, res, next) => {
  try {
    const newlecture = new Lecture(req.body);
    await newlecture.save();
    res.status(201).json({ success: true, result: [newlecture] });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
})

// Update an existing lecture
export const updateLecture = asyncHandler(async (req, res, next) => {
  const { lectureId } = req.params
  try {
    const updatedlecture = await Lecture.findByIdAndUpdate(lectureId, req.body, { new: true });
    
    if (!updatedlecture) {
      return res.status(404).json({ message: "lecture not found" });
    }

    res.status(200).json({ success: true, result: [updatedlecture] });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
})

// Delete a lecture
export const deleteLecture = asyncHandler(async (req, res, next) => {
  const { lectureId } = req.params;
  try {
    const deletedlecture = await Lecture.findByIdAndDelete(lectureId);
    
    if (!deletedlecture) {
      return res.status(404).json({ message: "lecture not found" });
    }

    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
})

// Get all lectures
export const allLectures = asyncHandler(async (req, res, next) => {
  try {
    const lectures = await Lecture.find()
    res.status(200).json({ success: true, result: [lectures] });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
})

// Get a single lecture by ID 
export const getLectureById = asyncHandler(async (req, res) => {
  const { lectureId } = req.params;
  try {
    const lecture = await Lecture.findById(lectureId)
    // .populate('faculties.years.subject.addLecture'); // Populate as needed
    if (!lecture) {
      return res.status(404).json({ success: false, message: "lecture not found" });
    }
    res.status(200).json({ success: true, result: [lecture] });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});
