import { definitions } from './definitions'

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
  definitions,
}
