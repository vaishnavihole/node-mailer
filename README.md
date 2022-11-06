# ✉️ node-mailer 

## Simple Email Service Using Nodemailer

### How to use it?

`POST https://node-mailer-kp6g.onrender.com/send`

body
```
{
    "to": "vaishnavihole1@gmail.com",
    "subject": "test email",
    "text": "this is test email using my node mailer service"
    
}
```

response
```
{
    "status": true,
    "message": "message send successfully"
}
```