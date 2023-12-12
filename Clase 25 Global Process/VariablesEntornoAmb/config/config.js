import dotenv from 'dotenv'
import params from './params.js'

const mode = params.mode

//dotenv.config();

dotenv.config({
   path:`./.env.${mode}`
})

 export default {
    port: process.env.PORT,
    mongoUrl: process.env.MONGO
 }