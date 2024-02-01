import mailer from 'nodemailer'
import config from '../config/config.js'

export default class MailingService{
    constructor(){
        this.client = mailer.createTransport({
            service: config.mailing.SERVICE,
            port: 587,
            auth:{
                user: config.mailing.USER,
                pass: config.mailing.PASSWORD
            }
        })
    }

    sendMailUser = async ({ from, to, subject,html,attachments =[]})=>{
        let result = await this.client.sendMail({
            from,
            to,subject,html,attachments
        })
        return result
    }
}