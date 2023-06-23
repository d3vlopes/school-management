import swaggerAutogen from 'swagger-autogen'

import { doc } from '@/docs'

const outputFile = '../../docs/swagger-output.json'
const endpointsFiles = ['../routes/modules/*Routes.ts']

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc)
