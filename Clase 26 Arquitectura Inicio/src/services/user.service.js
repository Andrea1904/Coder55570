import bcrypt from 'bcrypt'
import userModel from '../models/user.model.js'

class UserService{
    async createUser(data){
        try{
            data.password = bcrypt.hashSync(data.password, bcrypt.genSaltSync(10))
            const result = await userModel.create(data)
            return result
        }catch(error){
            throw new Error(error.message)
        }
    }

    async getUser(email){
        try{
            console.log(email)
           const result  = await userModel.findOne({email}).lean()

           return result

        }catch(error){
            throw new Error(error.message)
        }
    }
}
 export default new UserService();