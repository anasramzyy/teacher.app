import mongoose, { Schema, Types, model } from "mongoose";


// Define the category schema
export const categorySchema = new Schema({
  categoryName: { type: String,
    enum: ["التعليم الاكاديمي للكبار"],
  },
  facultyName: { type: String,
    enum: [],
    required: true },
  yearName: { type: String,
    enum: ["1", "2", "3", "4"],
    required: true },
  subjectName: {
    type: String,
    required: true,
  },
  paid: {
    type: Boolean ,
    default: false 
  },
  createdBy: { type: Types.ObjectId, ref: "User", required: true },
}, { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true }});


categorySchema.virtual("Lecture", {
  ref: "Lecture",
  localField: "_id",           // category model
  foreignField: "categoryId",  // category model
})

// model
export const Category = mongoose.Category || model("Category", categorySchema)
