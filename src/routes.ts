import { Router } from 'express'
import routerPing from './components/ping/ping.route'

const router = Router()

router.use('/ping', routerPing)

router.use('*', (req, res) => {
  const error = { message: 'path not found' }
  res.status(404).json(error)
})

const routerRoot = router

export default routerRoot
