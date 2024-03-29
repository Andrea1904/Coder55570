import dotenv from 'dotenv'

dotenv.config()

export default{
    mongo:{
        URL: process.env.MONGO_URL,
        PORT: process.env.PORT
    },
    mailing:{
        SERVICE: process.env.MAILING_SERVICE,
        USER:process.env.MAILING_USER ,
        PASSWORD: process.env.MAILING_PASSWORD
    }
}