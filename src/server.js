import express from 'express'
import morgan from 'morgan'
import { noteRouter } from './routes/note-routes.js'
import { errorHandler } from './middleware/error-handler.js'

const port = process.env.PORT || 3000
const app = express()

app.use(morgan('common'))

app.use(express.json())

app.use(noteRouter)

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})