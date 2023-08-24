const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());

const transporter = nodemailer.createTransport({
    service:"Gmail",
    auth:{
        user:'paulojorgeproenca@gmail.com',
        pass:'*Miathedog2019'
    }
});

app.post("/send-email", (req, res) => {
    const {name,email,subject,message} = req.body;

    const mailOptions = {
        from: "your.email@gmail.com",
        to: "destination@example.com",
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions,(error,info) => {
        if(error){
            console.log("Error sending email: ", error);
            res.status(500).json({message: "Error sending email"});
        }else{
            console.log("Email sent: ",info.response);
            res.json({ message: "Email sent successfully" });
        }
    });
});

const PORT = process.env.PORT || 300;

app.listen(PORT,() =>{
    console.log(`Server started on port ${PORT}`);
});