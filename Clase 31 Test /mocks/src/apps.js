import express from 'express'
import userRouter from './routes/users.route.js'

const app =express() 
app.use('/api/users',userRouter)

app.listen(8080,()=>{
    console.log('Server Up' )
})
