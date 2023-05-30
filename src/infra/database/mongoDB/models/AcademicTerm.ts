import { AcademicTermModel } from '@/core/models'

import { Schema, SchemaTypes, model } from 'mongoose'

const academicTermSchema = new Schema<AcademicTermModel>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
      default: '3 mês',
    },
    createdBy: {
      type: SchemaTypes.ObjectId,
      ref: 'Admin',
    },
  },
  { timestamps: true },
)

export const AcademicTerm = model('Academic-Term', academicTermSchema)
