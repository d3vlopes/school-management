import { model, Schema } from 'mongoose'
import { ObjectId } from 'mongodb'

import { AdminModel } from '@/core/models'

const schema = new Schema<AdminModel>(
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
    role: {
      type: String,
      default: 'admin',
    },
    academicTerms: [
      {
        type: ObjectId,
        ref: 'AcademicTerm',
      },
    ],
    programs: [
      {
        type: ObjectId,
        ref: 'Program',
      },
    ],
    yearGroups: [
      {
        type: ObjectId,
        ref: 'YearGroup',
      },
    ],
    academicYears: [
      {
        type: ObjectId,
        ref: 'Academic-Year',
      },
    ],
    classLevels: [
      {
        type: ObjectId,
        ref: 'ClassLevel',
      },
    ],
    teachers: [
      {
        type: ObjectId,
        ref: 'Teacher',
      },
    ],
    students: [
      {
        type: ObjectId,
        ref: 'Student',
      },
    ],
  },
  {
    timestamps: true,
  },
)

export const Admin = model('Admin', schema)
