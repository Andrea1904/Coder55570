import express from 'express'
import compression from 'express-compression'

const app = express()

app.use(compression()) // gzip

app.use(compression({
    brotli: {
        enable: true,
        zlib:{}
    }
})) // brotli

app.get('/cadena',(req,res)=>{
    let cadena = ' Esta es una cadena extremadamente larga para hacer pruebas'

    for( let i=0; i < 10e5 ;i++){
        cadena+= ' Esta es una cadena extremadamente larga para hacer pruebas' 
    }
    res.send(cadena)
})

app.listen(3000,()=>console.log('Server UP'))