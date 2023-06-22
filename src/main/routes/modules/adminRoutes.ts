import { Router } from 'express'

import { adaptRoute } from '@/infra/adapters/http/express/adaptRoute'

import {
  AdminModuleFactory,
  AdminModuleAction,
} from '@/main/factories/modules'

import {
  authMiddleware,
  adminRoleMiddleware,
} from '@/main/middlewares'

const adminModuleFactory = new AdminModuleFactory()

export const adminRoutes = Router()

adminRoutes.post(
  '/admins/register',
  adaptRoute(
    /* 
      #swagger.tags = ['Admin']
      #swagger.summary = 'Endpoint for register a new admin'
      #swagger.requestBody = {
        schema: { $ref: "#/definitions/AdminRegisterRequestDTO" }
      }
      #swagger.responses[201] = {
        description: "Created",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/AdminRegisterResponseDTO" }
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
    adminModuleFactory.makeController(AdminModuleAction.REGISTER),
  ),
)

adminRoutes.post(
  '/admins/login',
  adaptRoute(
    /* 
      #swagger.tags = ['Admin']
      #swagger.summary = 'Endpoint for make login with admin'
      #swagger.requestBody = {
        schema: { $ref: "#/definitions/AdminLoginRequestDTO" }
      }
      #swagger.responses[200] = {
        description: "Ok",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/AdminLoginResponseDTO" }
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
    adminModuleFactory.makeController(AdminModuleAction.LOGIN),
  ),
)

adminRoutes.get(
  '/admins/profile',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    /* 
      #swagger.tags = ['Admin']
      #swagger.summary = 'Endpoint for get admin profile'
      #swagger.security = [{ "bearerAuth": [] }] 
      #swagger.responses[200] = {
        description: "Ok",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/AdminGetProfileResponseDTO" }
          }           
        }
      }
      #swagger.responses[400] = {
        description: "Admin not found",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/AdminGetProfileNotFound" }
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
    adminModuleFactory.makeController(AdminModuleAction.GET_PROFILE),
  ),
)

adminRoutes.get(
  '/admins',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    /* 
      #swagger.tags = ['Admin']
      #swagger.summary = 'Endpoint for get all admins'
      #swagger.security = [{ "bearerAuth": [] }] 
      #swagger.responses[200] = {
        description: "Ok",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/AdminGetAllResponseDTO" }
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
    adminModuleFactory.makeController(AdminModuleAction.GET_ALL),
  ),
)

adminRoutes.put(
  '/admins',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    /* 
      #swagger.tags = ['Admin']
      #swagger.summary = 'Endpoint for update admin information'
      #swagger.security = [{ "bearerAuth": [] }] 
      #swagger.responses[200] = {
        description: "Ok",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/AdminGetAllResponseDTO" }
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
    adminModuleFactory.makeController(AdminModuleAction.UPDATE),
  ),
)
