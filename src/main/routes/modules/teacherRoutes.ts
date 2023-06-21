import { Router } from 'express'

import { adaptRoute } from '@/infra/adapters/http/express/adaptRoute'

import {
  TeacherModuleFactory,
  TeacherModuleAction,
} from '@/main/factories/modules'

import {
  authMiddleware,
  adminRoleMiddleware,
  teacherRoleMiddleware,
} from '@/main/middlewares'

const teacherModuleFactory = new TeacherModuleFactory()

export const teacherRoutes = Router()

teacherRoutes.post(
  '/teachers/register',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    /* 
      #swagger.tags = ['Teacher']
      #swagger.summary = 'Endpoint for register a new teacher'
      #swagger.requestBody = {
        schema: { $ref: "#/definitions/TeacherRegisterRequestDTO" }
      }
      #swagger.responses[201] = {
        description: "Created",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/TeacherRegisterResponseDTO" }
          }           
        }
      }
      #swagger.responses[400] = {
        description: "Email already registered",
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
    teacherModuleFactory.makeController(TeacherModuleAction.REGISTER),
  ),
)

teacherRoutes.post(
  '/teachers/login',
  adaptRoute(
    /* 
      #swagger.tags = ['Teacher']
      #swagger.summary = 'Endpoint for make login with teacher'
      #swagger.requestBody = {
        schema: { $ref: "#/definitions/TeacherLoginRequestDTO" }
      }
      #swagger.responses[200] = {
        description: "Ok",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/TeacherLoginResponseDTO" }
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
    teacherModuleFactory.makeController(TeacherModuleAction.LOGIN),
  ),
)

teacherRoutes.get(
  '/teachers',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    /* 
      #swagger.tags = ['Teacher']
      #swagger.summary = 'Endpoint for get all teachers'
      #swagger.security = [{ "bearerAuth": [] }] 
      #swagger.responses[200] = {
        description: "Ok",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/TeacherGetAllResponseDTO" }
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
    teacherModuleFactory.makeController(TeacherModuleAction.GET_ALL),
  ),
)

teacherRoutes.get(
  '/teachers/admin/:id',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    /* 
      #swagger.tags = ['Teacher']
      #swagger.summary = 'Endpoint for get teacher by id'
      #swagger.security = [{ "bearerAuth": [] }]
      #swagger.parameters['id'] = { type: 'string'}
      #swagger.responses[200] = {
        description: "Ok",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/TeacherGetByIdResponseDTO" }
          }           
        }
      }
      #swagger.responses[404] = {
        description: "Not found",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/TeacherNotFoundError" }
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
    teacherModuleFactory.makeController(
      TeacherModuleAction.GET_BY_ID,
    ),
  ),
)

teacherRoutes.get(
  '/teachers/profile',
  teacherRoleMiddleware,
  authMiddleware,
  adaptRoute(
    /* 
      #swagger.tags = ['Teacher']
      #swagger.summary = 'Endpoint for get teacher profile'
      #swagger.security = [{ "bearerAuth": [] }] 
      #swagger.responses[200] = {
        description: "Ok",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/TeacherGetProfileResponseDTO" }
          }           
        }
      }
      #swagger.responses[400] = {
        description: "Teacher not found",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/TeacherGetProfileNotFound" }
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
    teacherModuleFactory.makeController(
      TeacherModuleAction.GET_PROFILE,
    ),
  ),
)

teacherRoutes.put(
  '/teachers',
  teacherRoleMiddleware,
  authMiddleware,
  adaptRoute(
    /* 
      #swagger.tags = ['Teacher']
      #swagger.summary = 'Endpoint for update teacher information'
      #swagger.security = [{ "bearerAuth": [] }] 
      #swagger.responses[200] = {
        description: "Ok",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/TeacherGetAllResponseDTO" }
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
    teacherModuleFactory.makeController(TeacherModuleAction.UPDATE),
  ),
)
