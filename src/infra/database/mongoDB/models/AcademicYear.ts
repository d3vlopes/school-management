import { Schema, SchemaTypes, model } from 'mongoose'

import { AcademicYearModel } from '@/core/models'

const schema = new Schema<AcademicYearModel>(
  {
    name: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    isCurrent: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: String,
    },
    students: [
      {
        type: SchemaTypes.ObjectId,
        ref: 'Student',
      },
    ],
    teachers: [
      {
        type: SchemaTypes.ObjectId,
        ref: 'Teacher',
      },
    ],
  },
  {
    timestamps: true,
  },
)

export const AcademicYear = model('Academic-Year', schema)
