import { Schema, SchemaTypes, model, models } from 'mongoose'

import { AcademicTermModel } from '@/core/models'

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

export const AcademicTerm =
  models['Academic-Term'] ||
  model('Academic-Term', academicTermSchema)
