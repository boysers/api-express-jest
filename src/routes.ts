import { Router } from 'express'
import routerPing from './components/ping/ping.route'

const router = Router()

router.use('/ping', routerPing)

const routerRoot = router

export default routerRoot
