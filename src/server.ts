import app from './app'
import { createServer } from 'http'

const port = process.env.API_PORT || '3000'
app.set('port', port)

const httpServer = createServer(app)

httpServer.on('error', (err) => console.error('Error :', err))
httpServer.on('listening', () => console.log('Listening on', port))

httpServer.listen(port)
