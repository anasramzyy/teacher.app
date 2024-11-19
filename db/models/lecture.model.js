import mongoose, { Schema, Types, model } from "mongoose";

export const lectureSchema = new Schema({
  categoryId: {
      type: Types.ObjectId,
      ref: "Category",
      required: true
  },
  lecture: [{
      name: { type: String, required: true },
      videoLink: { type: [String], default: []},
      recordLink: { type: [String], default: []},
      fileLink: { type: [String], default: []}
  }]
}, { timestamps: true })


// model
export const Lecture = mongoose.models.Lecture || model('Lecture', lectureSchema);