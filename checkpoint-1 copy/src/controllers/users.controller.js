import { logSuccess, logError } from "../utils/console.utils.js";

export class UserController {

    static async getUser (req, res ,next) {
        try{
            res.send('OK')
        }catch(error){
            logError(error)
            next(error)
        }
 
    }

    static async getUserById (req, res ,next) {
        try{
            res.send('OK')
        }catch(error){
            logError(error)
            next(error)
        }
    }

    static async createUser (req, res ,next) {
        try{
            res.send('OK')
        }catch(error){
            logError(error)
            next(error)
        }
    }

}