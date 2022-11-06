import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config()

const app = express()
app.use(express.json())

app.post('/send', async (req, res) => {
    const { to, subject, text } = req.body

    // smtpTransport it is object to send mail
    // SMTP = simple mail transfer protocol
    const smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "vaishnavirtc@gmail.com",
            pass: process.env.APP_PASSWORD
        }
    });

    const mailOptions = {
        from: "vaishnavirtc@gmail.com",
        to: to,
        subject: subject,
        text: text
    }

    smtpTransport.sendMail(mailOptions, () => {
        smtpTransport.close()
    })

    res.json({
        "status": true,
        "message": "message send successfully"
    })

})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server started running on port ${PORT}📦`)
})