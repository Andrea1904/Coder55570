import { logSuccess, logError } from "../utils/console.utils.js";

export class OrderController {

    static async getOrders (req, res ,next) {
        try{
            res.send('OK')
        }catch(error){
            logError(error)
            next(error)
        }
 
    }

    static async getOrderById (req, res ,next) {
        try{
            res.send('OK')
        }catch(error){
            logError(error)
            next(error)
        }
    }

    static async createOrder (req, res ,next) {
        try{
            res.send('OK')
        }catch(error){
            logError(error)
            next(error)
        }
    }

    static async resolveOrder (req, res ,next) {
        try{
            res.send('OK')
        }catch(error){
            logError(error)
            next(error)
        }
    }

}