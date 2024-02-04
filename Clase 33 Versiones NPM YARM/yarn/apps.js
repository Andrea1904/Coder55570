// npm init -y
// yarn init -y

// npm i install express
// yarn add express yarn remove express

import express from 'express'

const app = express()

app.get('/', (req,res) =>{
    res.send(' Es nuestro primer server en yarn')
})

app.listen(3000, ()=> console.log( "Server Up"))