import { Router } from 'express'

import { adaptRoute } from '@/infra/adapters/http/express/adaptRoute'

import {
  authMiddleware,
  adminRoleMiddleware,
} from '@/main/middlewares'

import {
  AcademicYearModuleAction,
  AcademicYearModuleFactory,
} from '@/main/factories/modules'

const academicYearModuleFactory = new AcademicYearModuleFactory()

export const academicYearRoutes = Router()

academicYearRoutes.post(
  '/academic-years/create',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    /* 
      #swagger.tags = ['Academic Year']
      #swagger.summary = 'Endpoint for create a new academic year'
      #swagger.security = [{ "bearerAuth": [] }]
      #swagger.requestBody = {
        schema: { $ref: "#/definitions/AcademicYearCreateRequestDTO" }
      } 
      #swagger.responses[201] = {
        description: "Created",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/AcademicYearCreateResponseDTO" }
          }           
        }
      }
      #swagger.responses[400] = {
        description: "Name already exists",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/AcademicYearNameAlreadyExistsError" }
          }           
        }
      }
      #swagger.responses[500] = {
        description: "Server error",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/ServerError" }
          }           
        }
      }     
    */
    academicYearModuleFactory.makeController(
      AcademicYearModuleAction.CREATE,
    ),
  ),
)

academicYearRoutes.get(
  '/academic-years',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    /* 
      #swagger.tags = ['Academic Year']
      #swagger.summary = 'Endpoint for get all academic years'
      #swagger.security = [{ "bearerAuth": [] }]
      #swagger.responses[200] = {
        description: "Ok",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/AcademicYearGetAllResponseDTO" }
          }           
        }
      }
      #swagger.responses[500] = {
        description: "Server error",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/ServerError" }
          }           
        }
      }     
    */
    academicYearModuleFactory.makeController(
      AcademicYearModuleAction.GET_ALL,
    ),
  ),
)

academicYearRoutes.get(
  '/academic-years/:id',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    /* 
      #swagger.tags = ['Academic Year']
      #swagger.summary = 'Endpoint for get academic year by id'
      #swagger.security = [{ "bearerAuth": [] }]
      #swagger.parameters['id'] = { type: 'string'}
      #swagger.responses[200] = {
        description: "Ok",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/AcademicYearGetByIdResponseDTO" }
          }           
        }
      }
      #swagger.responses[404] = {
        description: "Not found",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/AcademicYearNotFoundError" }
          }           
        }
      }     
      #swagger.responses[500] = {
        description: "Server error",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/ServerError" }
          }           
        }
      }     
    */
    academicYearModuleFactory.makeController(
      AcademicYearModuleAction.GET_BY_ID,
    ),
  ),
)

academicYearRoutes.put(
  '/academic-years/:id',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    /* 
      #swagger.tags = ['Academic Year']
      #swagger.summary = 'Endpoint for update academic year'
      #swagger.security = [{ "bearerAuth": [] }]
      #swagger.parameters['id'] = { type: 'string'}
      #swagger.responses[200] = {
        description: "Ok",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/AcademicYearUpdateResponseDTO" }
          }           
        }
      }
      #swagger.responses[400] = {
        description: "Name already exists",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/AcademicYearUpdateNameAlreadyExists" }
          }           
        }
      }     
      #swagger.responses[404] = {
        description: "Not found",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/AcademicYearNotFoundError" }
          }           
        }
      }     
      #swagger.responses[500] = {
        description: "Server error",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/ServerError" }
          }           
        }
      }     
    */
    academicYearModuleFactory.makeController(
      AcademicYearModuleAction.UPDATE,
    ),
  ),
)

academicYearRoutes.delete(
  '/academic-years/:id',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    /* 
      #swagger.tags = ['Academic Year']
      #swagger.summary = 'Endpoint for remove academic year'
      #swagger.security = [{ "bearerAuth": [] }]
      #swagger.parameters['id'] = { type: 'string'}
      #swagger.responses[204] = {
        description: "No Content",
      }   
      #swagger.responses[404] = {
        description: "Not found",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/AcademicYearNotFoundError" }
          }           
        }
      }     
      #swagger.responses[500] = {
        description: "Server error",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/ServerError" }
          }           
        }
      }     
    */
    academicYearModuleFactory.makeController(
      AcademicYearModuleAction.DELETE,
    ),
  ),
)
