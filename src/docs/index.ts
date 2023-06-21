import {
  EmailAlreadyRegistered,
  InvalidCredentials,
  ServerError,
} from './definitions/shared'

import {
  AdminRegisterRequestDTO,
  AdminRegisterResponseDTO,
  AdminLoginRequestDTO,
  AdminLoginResponseDTO,
  AdminGetProfileNotFound,
  AdminGetProfileResponseDTO,
  AdminGetAllResponseDTO,
  AdminUpdateResponseDTO,
  AcademicTermCreateRequestDTO,
  AcademicTermCreateResponseDTO,
  AcademicTermNameAlreadyExistsError,
  AcademicTermGetAllResponseDTO,
  AcademicTermGetByIdResponseDTO,
  AcademicTermNotFoundError,
  AcademicTermUpdateNameAlreadyExists,
  AcademicTermUpdateResponseDTO,
  AcademicYearCreateRequestDTO,
  AcademicYearCreateResponseDTO,
  AcademicYearNameAlreadyExistsError,
  AcademicYearGetAllResponseDTO,
  AcademicYearGetByIdResponseDTO,
  AcademicYearNotFoundError,
  AcademicYearUpdateNameAlreadyExists,
  AcademicYearUpdateResponseDTO,
} from './definitions/modules'

export const doc = {
  info: {
    version: '1.0.0',
    title: 'School Management API',
    description: 'School management API documentation',
    contact: {
      name: 'Leandro Lopes',
      email: 'contato.leandrolopes@outlook.com',
      url: 'https://www.linkedin.com/in/leandroolopes',
    },
  },
  securityDefinitions: {
    bearerAuth: {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    },
  },
  servers: [
    {
      url: '/api',
      description: 'Main server',
    },
  ],
  tags: [
    { name: 'Admin' },
    { name: 'Academic Term' },
    { name: 'Academic Year' },
  ],
  definitions: {
    EmailAlreadyRegistered,
    InvalidCredentials,
    ServerError,
    AdminRegisterResponseDTO,
    AdminRegisterRequestDTO,
    AdminLoginRequestDTO,
    AdminLoginResponseDTO,
    AdminGetProfileNotFound,
    AdminGetProfileResponseDTO,
    AdminGetAllResponseDTO,
    AdminUpdateResponseDTO,
    AcademicTermCreateRequestDTO,
    AcademicTermCreateResponseDTO,
    AcademicTermNameAlreadyExistsError,
    AcademicTermGetAllResponseDTO,
    AcademicTermGetByIdResponseDTO,
    AcademicTermNotFoundError,
    AcademicTermUpdateNameAlreadyExists,
    AcademicTermUpdateResponseDTO,
    AcademicYearCreateRequestDTO,
    AcademicYearCreateResponseDTO,
    AcademicYearNameAlreadyExistsError,
    AcademicYearGetAllResponseDTO,
    AcademicYearGetByIdResponseDTO,
    AcademicYearNotFoundError,
    AcademicYearUpdateNameAlreadyExists,
    AcademicYearUpdateResponseDTO,
  },
}
