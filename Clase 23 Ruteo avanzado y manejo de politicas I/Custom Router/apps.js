import express from 'express'
import userRouter from './src/router/users/users.router.js'

const app = express()

const usersRouter = new userRouter();
app.use('/users',usersRouter.getRouter())


app.listen(8080, ()=> console.log('Server Up'))