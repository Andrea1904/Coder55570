import { Router} from 'express'

export default class RouterApp {
    constructor(){
        this.router = Router()
        this.init()
    }

    init(){}

    getRouter(){
        return this.router
    }

    get(path, ...callbacks){
        this.router.get(path,this.applyCallbacks(callbacks))
    }

    applyCallbacks(callbacks){
        return callbacks.map(callback=>async(...params)=>{
        try{
          callback.apply(this,params)
        }catch(error){
            console.log(error)
            params[1].status(500).send(error)
        }
        })
    }
}