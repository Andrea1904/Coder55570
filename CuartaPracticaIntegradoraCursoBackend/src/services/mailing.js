import mailer from 'nodemailer';
import config from '../config/config.js';

export default class MailingService {
    constructor(){
        this.client = mailer.createTransport({
            service:config.mailing.SERVICE,
            port: 587,
            auth:{
                user: config.mailing.USER,
                pass: config.mailing.PASSWORD
            },
            secure: false, // Indica si usar una conexión segura (TLS). Puedes establecer esto a 'true' si es necesario.
            tls: {
                rejectUnauthorized: false // Puedes establecer esto a 'true' si el certificado SSL es autofirmado o no es de confianza.
            }
        })
    }

    sendSimpleMail = async({from, to, subject, html, attachments=[]})=>{
        let result =  await this.client.sendMail({
            from,
            to,
            subject,
            html,
            attachments
        })
        console.log(result);
        return result
    }
}