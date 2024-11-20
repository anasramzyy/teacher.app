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
  facultyNameId: {
    type: Types.ObjectId,
    ref: 'Category', 
    required: true,
  },
  yearNameId: {
    type: Types.ObjectId,
    ref: 'Category', 
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
