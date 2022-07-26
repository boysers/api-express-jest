import { CorsOptions } from 'cors'

const corsOptions: CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content',
    'Accept',
    'Content-Type',
    'Authorization'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  origin: '*'
}

export default corsOptions
