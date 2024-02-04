import { logSuccess, logError } from "../utils/console.utils.js";

export class BussicessesController {

    static async getBussinesses (req, res ,next) {
        try{
            res.send('OK')
        }catch(error){
            logError(error)
            next(error)
        }
 
    }

    static async getBussinessById (req, res ,next) {
        try{
            res.send('OK')
        }catch(error){
            logError(error)
            next(error)
        }
    }

    static async createBussinesses (req, res ,next) {
        try{
            res.send('OK')
        }catch(error){
            logError(error)
            next(error)
        }
    }

    static async addProductsToBussiness (req, res ,next) {
        try{
            res.send('OK')
        }catch(error){
            logError(error)
            next(error)
        }
    }

}