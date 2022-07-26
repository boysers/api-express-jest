import { Request, Response } from 'express'

export type HandlerFunc = (req: Request, res: Response) => void
