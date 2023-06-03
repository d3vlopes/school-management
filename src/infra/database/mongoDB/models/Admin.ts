import { model, Schema, SchemaTypes, models } from 'mongoose'

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
        type: SchemaTypes.ObjectId,
        ref: 'Academic-Term',
      },
    ],
    programs: [
      {
        type: SchemaTypes.ObjectId,
        ref: 'Program',
      },
    ],
    yearGroups: [
      {
        type: SchemaTypes.ObjectId,
        ref: 'Year-Group',
      },
    ],
    academicYears: [
      {
        type: SchemaTypes.ObjectId,
        ref: 'Academic-Year',
      },
    ],
    classLevels: [
      {
        type: SchemaTypes.ObjectId,
        ref: 'Class-Level',
      },
    ],
    teachers: [
      {
        type: SchemaTypes.ObjectId,
        ref: 'Teacher',
      },
    ],
    students: [
      {
        type: SchemaTypes.ObjectId,
        ref: 'Student',
      },
    ],
  },
  {
    timestamps: true,
  },
)

export const Admin = models.Admin || model('Admin', schema)
