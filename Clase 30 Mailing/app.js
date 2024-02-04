import nodemailer from 'nodemailer'
import express from 'express'
import twilio from 'twilio'

//xpuz hnit aubx uphj

//osxu ciaw xvmc kvor

const app = express()
const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth:{
        user:'coderprofeandrea@gmail.com',
        pass:'xpuzhnitaubxuphj'
    }
})

app.get('/mail',async(req,res)=>{
    try{
        const mailParams={
            from: 'coderprofeandrea@gmail.com',
            to: 'coderprofeandrea@gmail.com',
            subject: 'Test inicial envio de mail',
            html: "<b>Este es un mensaje de prueba te invito a participar enviando otros mail !!!</b>", 
        }
        const sendMail = await transporter.sendMail(mailParams)
        res.send ('Mail Enviado  !!!')
    }catch(error){
        console.log(error)
    }
})

app.get('/mailTest',async(req,res)=>{
    try{
        const mailParams={
            from: 'coderprofeandrea@gmail.com',
            to: 'coderprofeandrea@gmail.com',
            subject: 'Test envio de mail con adjunto',
            html: "<b>Este es un correo para ver el adjunto dentro el un correo !!!</b>", 
            attachments: [{
                filename:'perrito.jpeg',
                path: process.cwd()+'/src/public/perrito.jpeg',
                cid:'perrito'
            }]

        }
        const sendMail = await transporter.sendMail(mailParams)
        res.send ('Mail Enviado  !!!')
    }catch(error){
        console.log(error)
    }
})

const TWILIO_ACCOUNT_SID= 'AC585f38b7526b8f32515d6eaa43da9705'
const TWILIO_AUTH_TOKEN= '293a6db4c8e6e5d27bc24b15727a0e6b'
const TWILIO_NUMBER='+12052728451'

const client= twilio(TWILIO_ACCOUNT_SID,TWILIO_AUTH_TOKEN)

app.get('/sms',async(req,res)=>{
    let smsParameter = await client.messages.create({
        body:'Mensaje de prueba',
        from:TWILIO_NUMBER,
        to: '+573165202508'
    })
    res.send({ status: 'success', result: 'Mensaje Enviado'})
})

app.use('/smstest',async(req,res)=>{

    const {nombre = "andrea" , producto ="tomate"}= req.query;
    let mensaje=''
    if(producto==="tomate"){
        mensaje= "deberias comprar"
    }else{
        mensaje= `Gracias ${nombre} tu solicitud de producto ${producto} ha sido aprobada`
    }

    let smsParameter = await  client.messages.create({
        body: mensaje,
        from:TWILIO_NUMBER,
        to:'+573165202508'
    })
     res.send({
        success:true,
        payload : smsParameter
     })
  
})
app.listen(8080,()=>{ 
    console.log( 'Server uP')})