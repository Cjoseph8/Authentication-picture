const nodemailer = require("nodemailer")

 require("dotenv").config()

const sendMail =async(options)=>{
   const transporter= await nodemailer.createTransport(
        {
            secure:true,
            service: process.env.service,
            
            auth: {
                user:process.env.mailUser,
                pass: process.env.mailpassWord
            }
        }
    )


let mailOptions = {
    from: process.env.mailUser,
    to: options.email,
    subject: options.subject,
    text: options.message,
    //html: options.html
}
await transporter.sendMail(mailOptions)

}
module.exports = sendMail