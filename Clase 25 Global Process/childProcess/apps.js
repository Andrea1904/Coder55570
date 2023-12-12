import express from 'express'
import { fork } from 'child_process'


 const app = express()

 const PORT =  8080
 console.log(PORT)

 app.get('/suma',(req,res)=>{
    const child = fork('./operacionCompleja.js')
    child.send('Inicio el proceso')
    child.on('message',(result)=>{
        res.send( 'El resultado de la operacion fue : ' +result)
    })
 })

 app.listen(PORT,()=>console.log('Server Arriba'))