import { Router } from 'express'
import { pong, create, notFound, errorServer } from './ping.controller'

const router = Router()

router.get('/', pong)
router.get('/201', create)
router.get('/404', notFound)
router.get('/500', errorServer)

const routerPing = router

export default routerPing
