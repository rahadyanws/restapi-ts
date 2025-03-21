import express, { Application, Request, Response } from 'express'

const app: Application = express()
const port: number = 3000

app.use('/', (req: Request, res: Response) => {
  res.status(200).send({ status: '200' })
})

app.listen(port, () => console.log(`Server listining on port ${port}`))
