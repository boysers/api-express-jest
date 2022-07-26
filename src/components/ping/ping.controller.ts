import { HandlerFunc } from '../../ts/types/express.type'

export const pong: HandlerFunc = (_req, res) => {
  const message = 'pong'
  res.status(200).json({ message })
}

export const create: HandlerFunc = (_req, res) => {
  const message = 'pong create'
  res.status(201).json({ message })
}

export const notFound: HandlerFunc = (_req, res) => {
  const message = 'pong not found'
  res.status(404).json({ message })
}

export const errorServer: HandlerFunc = (_req, res) => {
  const message = 'pong error server'
  res.status(500).json({ message })
}
