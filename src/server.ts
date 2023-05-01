import express, { Response } from 'express'

const app = express()

app.get('/', (_, res: Response) => {
  return res.json({ message: 'Hello World!' })
})

app.listen(8000, () => console.log('Server is running!'))
