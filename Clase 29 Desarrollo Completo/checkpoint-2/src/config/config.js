import dotenv from 'dotenv'

dotenv.config()

const ENV ={
     PORT: process.env.PORT || 8080,
     DB_URL : process.env.DB || ''
}

export default ENV;