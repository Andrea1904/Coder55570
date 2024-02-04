import express from ' express'
import userRouter from './router/user.router.js'
import errorMiddleware from './middleware/error.middleware.js'

const app = express()

app.use ('/users',userRouter)
app.use(errorMiddleware)

app.lister ( 8080,()=> console.log('Server UP'))