import mongoose, { Schema, Types,  model } from "mongoose";

// Subscription Schema
export const subscriptionSchema = new Schema({
  studentId: {
    type: Types.ObjectId,
    ref: 'User', 
    required: true,
  },
  categoryId: {
    type: Types.ObjectId,
    ref: 'Category', 
    required: true,
  },
  facultyId: {
    type: Types.ObjectId,
    ref: 'Faculty', 
    required: true,
  },
  yearId: {
    type: Types.ObjectId,
    ref: 'Year', 
    required: true,
  },
  courseId: {
    type: Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  subscriptionDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'cancelled'],
    default: 'active',
  },
}, { timestamps: true });

// Model
export const Subscription = mongoose.models.Subscription || model('Subscription', subscriptionSchema);
