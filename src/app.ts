import express from 'express'
import cors from 'cors'
import corsOptions from './config/corsOptions'
import routerRoot from './routes'

const app = express()

app.use(express.urlencoded({ extended: false }))

app.use(express.json())

app.use(cors(corsOptions))

app.use(routerRoot)

export default app
