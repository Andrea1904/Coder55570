import express from 'express'
import mongoose from 'mongoose'
import ENV from './config/config.js'
import { logError,logSuccess } from './utils/console.utils.js'
import cors from 'cors'
import appRouter from './routers/app.router.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use('/api',appRouter)

app.use(cors({
    origin: ["http://localhost:3000"]
}))

mongoose.connect(ENV.DB_URL)
.then(()=>{
    logSuccess('Connect to BD OK')

    const server = app.listen(ENV.PORT,()=>{
        console.log('Server UP')
    })
})
.catch((error)=>{
    logError('No connect')
    throw error
})