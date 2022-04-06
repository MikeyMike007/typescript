import express from 'express'
import { Request, Response, NextFunction } from 'express'
import todoRoutes from './routes/todos'
import { json } from 'body-parser'

const app = express()

// Middle-ware - Parses the body of the Http Request and extract any json data in there
app.use(json())

app.use('/todos', todoRoutes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message })
})

// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//   res.status(500).json({ message: err.message })
// })

app.listen(3000)
