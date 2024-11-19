import { Category } from '../../../db/models/year.model.js';
import { Lecture } from '../../../db/models/lecture.model.js'
import { asyncHandler } from "../../utils/asyncHandler.js"


// Categories Controllers

export const createCategory = asyncHandler(async (req, res, next) => {
  try {
    const body = {...req.body}

    body.createdBy = req.user.id
    console.log(body)

    const newCategory = new Category( body );
    await newCategory.save();
    res.status(201).json({ success: true, result: [newCategory]});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
})

export const updateCategory = asyncHandler(async (req, res, next) => {
  const { id } = req.params
  try {
    const updatedCategory = await Category.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedCategory) return res.status(404).json({ message: "Category not found" });
    res.status(200).json({success: true, result: [updatedCategory]});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
})

export const deleteCategory = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedCategory = await Category.findByIdAndDelete(id);
    await Lecture.deleteMany({ yearId: req.params.yearId})
    if (!deletedCategory) return res.status(404).json({ message: "Category not found" });
    res.status(204).json({success: true, message: "category deleted successfully"});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}) 

export const getCategories = asyncHandler(async (req, res, next) => {
  try {
    const categories = await Category.find()
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
})


// Get a single category by ID (optional)
export const getCategoryById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findById(id)
    // .populate('faculties.years.subject.addLecture'); // Populate as needed
    if (!category) {
      return res.status(404).json({ success: false, message: "Category not found" });
    }
    res.status(200).json({ success: true, result: [category] });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// // Faculties Controllers

// export const createFaculty = asyncHandler(async (req, res, next) => {
//   const { categoryId } = req.body; 
//   try {
//     const category = await Category.findById(categoryId);
//     if (!category) return res.status(404).json({ message: "Category not found" });

//     const newFaculty = new Faculty(req.body);
//     category.faculties.push(newFaculty);
//     await category.save();
//     res.status(201).json({success: true, result: newFaculty});
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// })

// export const updateFaculty = asyncHandler(async (req, res, next) => {
//   const { categoryId, facultyId } = req.params;
//   try {
//     const category = await Category.findById(categoryId);
//     if (!category) return res.status(404).json({ message: "Category not found" });

//     const faculty = category.faculties.id(facultyId);
//     if (!faculty) return res.status(404).json({ message: "Faculty not found" });

//     faculty.set(req.body);
//     await category.save();
//     res.status(200).json({success: true, result: faculty});
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// })

// export const deleteFaculty = asyncHandler(async (req, res, next) => {
//   const { categoryId, facultyId } = req.params;
//   try {
//     const category = await Category.findById(categoryId);
//     if (!category) return res.status(404).json({ message: "Category not found" });

//     const faculty = category.faculties.id(facultyId);
//     if (!faculty) return res.status(404).json({ message: "Faculty not found" });

//     faculty.remove();
//     await category.save();
//     res.status(204).json({success: true, message: "faculty deleted succesfully"});
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// })

// export const getFaculties = asyncHandler(async (req, res, next) => {
//   const { categoryId } = req.params;
//   try {
//     const category = await Category.findById(categoryId).populate('faculties');
//     if (!category) return res.status(404).json({ message: "Category not found" });
//     res.status(200).json(category.faculties);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// })

// // Years Controllers

// export const createYear = asyncHandler(async (req, res, next) => {
//   const { categoryId, facultyId } = req.params
//   try {
//     const category = await Category.findById(categoryId);
//     if (!category) return res.status(404).json({ message: "Category not found" });

//     const faculty = category.faculties.id(facultyId);
//     if (!faculty) return res.status(404).json({ message: "Faculty not found" });

//     const newYear = { ...req.body };
//     faculty.years.push(newYear);
//     await category.save();
//     res.status(201).json({success: true, result: newYear});
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// })

// export const updateYear = asyncHandler(async (req, res, next) => {
//   const { categoryId, facultyId, yearId } = req.params;
//   try {
//     const category = await Category.findById(categoryId);
//     if (!category) return res.status(404).json({ message: "Category not found" });

//     const faculty = category.faculties.id(facultyId);
//     if (!faculty) return res.status(404).json({ message: "Faculty not found" });

//     const year = faculty.years.id(yearId);
//     if (!year) return res.status(404).json({ message: "Year not found" });

//     year.set(req.body);
//     await category.save();
//     res.status(200).json({success: true, result: year});
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// })

// export const deleteYear = asyncHandler(async (req, res, next) => {
//   const { categoryId, facultyId, yearId } = req.params;
//   try {
//     const category = await Category.findById(categoryId);
//     if (!category) return res.status(404).json({ message: "Category not found" });

//     const faculty = category.faculties.id(facultyId);
//     if (!faculty) return res.status(404).json({ message: "Faculty not found" });

//     const year = faculty.years.id(yearId);
//     if (!year) return res.status(404).json({ message: "Year not found" });

//     year.remove();
//     await category.save();
//     res.status(204).json({ success: true, message: "year deleted successfully"});
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// })

// export const getYears = asyncHandler(async (req, res, next) => {
//   const { categoryId, facultyId } = req.params;
//   try {
//     const category = await Category.findById(categoryId).populate('faculties.years');
//     if (!category) return res.status(404).json({ message: "Category not found" });

//     const faculty = category.faculties.id(facultyId);
//     if (!faculty) return res.status(404).json({ message: "Faculty not found" });

//     res.status(200).json(faculty.years);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// })