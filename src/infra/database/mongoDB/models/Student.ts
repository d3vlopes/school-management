import { Schema, SchemaTypes, model, models } from 'mongoose'

import { StudentModel } from '@/core/models'

const schema = new Schema<StudentModel>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    dateAdmitted: {
      type: Date,
      default: Date.now(),
    },
    studentId: {
      type: String,
      required: true,
    },
    isWithdrawn: {
      type: Boolean,
      default: false,
    },
    isSuspended: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      default: 'student',
    },
    academicYear: {
      type: SchemaTypes.ObjectId,
      ref: 'Academic-Year',
    },
    isGraduated: {
      type: Boolean,
      default: false,
    },
    yearGraduated: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
)

export const Student = models.Student || model('Student', schema)
