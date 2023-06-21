import { Router } from 'express'

import { adaptRoute } from '@/infra/adapters/http/express/adaptRoute'

import {
  StudentModuleFactory,
  StudentModuleAction,
} from '@/main/factories/modules'

import {
  authMiddleware,
  adminRoleMiddleware,
} from '@/main/middlewares'

const studentModuleFactory = new StudentModuleFactory()

export const studentRoutes = Router()

studentRoutes.post(
  '/students/register',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    /* 
      #swagger.tags = ['Student']
      #swagger.summary = 'Endpoint for create a new student'
      #swagger.security = [{ "bearerAuth": [] }]
      #swagger.requestBody = {
        schema: { $ref: "#/definitions/StudentRegisterRequestDTO" }
      } 
      #swagger.responses[201] = {
        description: "Created",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/StudentRegisterResponseDTO" }
          }           
        }
      }
      #swagger.responses[400] = {
        description: "Email already exists",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/EmailAlreadyRegistered" }
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
    studentModuleFactory.makeController(StudentModuleAction.REGISTER),
  ),
)

studentRoutes.post(
  '/students/login',
  adaptRoute(
    /* 
      #swagger.tags = ['Student']
      #swagger.summary = 'Endpoint for make login with student'
      #swagger.requestBody = {
        schema: { $ref: "#/definitions/StudentLoginRequestDTO" }
      }
      #swagger.responses[200] = {
        description: "Ok",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/StudentLoginResponseDTO" }
          }           
        }
      }
      #swagger.responses[400] = {
        description: "Invalid credentials",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/InvalidCredentials" }
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
    studentModuleFactory.makeController(StudentModuleAction.LOGIN),
  ),
)

studentRoutes.get(
  '/students',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    /* 
      #swagger.tags = ['Student']
      #swagger.summary = 'Endpoint for get all students'
      #swagger.security = [{ "bearerAuth": [] }] 
      #swagger.responses[200] = {
        description: "Ok",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/StudentGetAllResponseDTO" }
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
    studentModuleFactory.makeController(StudentModuleAction.GET_ALL),
  ),
)

studentRoutes.get(
  '/students/admin/:id',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    /* 
      #swagger.tags = ['Student']
      #swagger.summary = 'Endpoint for get student by id'
      #swagger.security = [{ "bearerAuth": [] }]
      #swagger.parameters['id'] = { type: 'string'}
      #swagger.responses[200] = {
        description: "Ok",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/StudentGetByIdResponseDTO" }
          }           
        }
      }
      #swagger.responses[404] = {
        description: "Not found",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/StudentNotFoundError" }
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
    studentModuleFactory.makeController(
      StudentModuleAction.GET_BY_ID,
    ),
  ),
)
