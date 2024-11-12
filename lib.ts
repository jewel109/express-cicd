import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
export const port = process.env.PORT
export const uri = process.env.URI || ""

const app = express()

app.use(express.json())

app.get('/hello', (req, res, next) => {
  res.status(200).json({
    data: {
      msg: "hei hello world"
    }
  })
})

export default app
