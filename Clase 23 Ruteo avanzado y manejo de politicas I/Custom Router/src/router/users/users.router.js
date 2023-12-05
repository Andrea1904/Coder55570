import RouterApp from '../app.router.js'

export default class userRouter extends RouterApp{
    init(){
        this.get('/',(req,res)=>{
            res.send('hola chicos')
        })
    }
}