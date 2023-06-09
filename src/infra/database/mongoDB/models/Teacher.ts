import { Schema, SchemaTypes, model, models } from 'mongoose'

import { TeacherModel } from '@/core/models'

const schema = new Schema<TeacherModel>(
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
    dateEmployed: {
      type: Date,
      default: Date.now(),
    },
    teacherId: {
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
      default: 'teacher',
    },
    applicationStatus: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
    },
    createdBy: {
      type: SchemaTypes.ObjectId,
      ref: 'Admin',
    },
  },
  {
    timestamps: true,
  },
)

export const Teacher = models.Teacher || model('Teacher', schema)
