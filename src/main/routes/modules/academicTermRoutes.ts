import { Router } from 'express'

import { adaptRoute } from '@/infra/adapters/http/express/adaptRoute'

import {
  authMiddleware,
  adminRoleMiddleware,
} from '@/main/middlewares'

import {
  AcademicTermModuleAction,
  AcademicTermModuleFactory,
} from '@/main/factories/modules'

const academicTermModuleFactory = new AcademicTermModuleFactory()

export const academicTermRoutes = Router()

academicTermRoutes.post(
  '/academic-terms/create',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    /* 
      #swagger.tags = ['Academic Term']
      #swagger.summary = 'Endpoint for create a new academic term'
      #swagger.security = [{ "bearerAuth": [] }]
      #swagger.requestBody = {
        schema: { $ref: "#/definitions/AcademicTermCreateRequestDTO" }
      } 
      #swagger.responses[201] = {
        description: "Created",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/AcademicTermCreateResponseDTO" }
          }           
        }
      }
      #swagger.responses[400] = {
        description: "Name already exists",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/AcademicTermNameAlreadyExistsError" }
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
    academicTermModuleFactory.makeController(
      AcademicTermModuleAction.CREATE,
    ),
  ),
)

academicTermRoutes.get(
  '/academic-terms',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    /* 
      #swagger.tags = ['Academic Term']
      #swagger.summary = 'Endpoint for get all academic terms'
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
    academicTermModuleFactory.makeController(
      AcademicTermModuleAction.GET_ALL,
    ),
  ),
)

academicTermRoutes.get(
  '/academic-terms/:id',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    /* 
      #swagger.tags = ['Academic Term']
      #swagger.summary = 'Endpoint for get academic term by id'
      #swagger.security = [{ "bearerAuth": [] }]
      #swagger.parameters['id'] = { type: 'string'}
      #swagger.responses[200] = {
        description: "Ok",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/AcademicTermGetByIdResponseDTO" }
          }           
        }
      }
      #swagger.responses[404] = {
        description: "Not found",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/AcademicTermNotFoundError" }
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
    academicTermModuleFactory.makeController(
      AcademicTermModuleAction.GET_BY_ID,
    ),
  ),
)

academicTermRoutes.put(
  '/academic-terms/:id',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    /* 
      #swagger.tags = ['Academic Term']
      #swagger.summary = 'Endpoint for update academic term'
      #swagger.security = [{ "bearerAuth": [] }]
      #swagger.parameters['id'] = { type: 'string'}
      #swagger.responses[200] = {
        description: "Ok",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/AcademicTermUpdateResponseDTO" }
          }           
        }
      }
      #swagger.responses[400] = {
        description: "Name already exists",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/AcademicTermUpdateNameAlreadyExists" }
          }           
        }
      }     
      #swagger.responses[404] = {
        description: "Not found",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/AcademicTermNotFoundError" }
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
    academicTermModuleFactory.makeController(
      AcademicTermModuleAction.UPDATE,
    ),
  ),
)

academicTermRoutes.delete(
  '/academic-terms/:id',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    /* 
      #swagger.tags = ['Academic Term']
      #swagger.summary = 'Endpoint for remove academic term'
      #swagger.security = [{ "bearerAuth": [] }]
      #swagger.parameters['id'] = { type: 'string'}
      #swagger.responses[204] = {
        description: "No Content",
      }   
      #swagger.responses[404] = {
        description: "Not found",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/AcademicTermNotFoundError" }
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
    academicTermModuleFactory.makeController(
      AcademicTermModuleAction.DELETE,
    ),
  ),
)
