import mongoose, { Schema, Types, model } from "mongoose";

export const lectureSchema = new Schema({
  subject_Id: {
      type: Types.ObjectId,
      ref: "Subject",
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