const express = require("express");
const nodemailer = require("nodemailer");
const cors=require("cors")
const path=require("path")
const app = express();
// console.log(process.env.port)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get("/",(req,res)=>{
  res.send("Hello ☺️")
})
app.post("/send-mail", async (req, res) => {
  const data=JSON.parse(req.body.data)
    const {email, subject,name ,message}=data;
    // console.log(data.name)   
  console.log("Server listening");
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", 
    port: 465, 
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'krupalsavaliya0pvt@gmail.com', // Your Gmail address
      pass: 'akqeyjfmcrdtvdre', // Your Gmail App Password
    },
  });

  try {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: 'krupalsavaliya0pvt@gmail.com', // sender address 
      to: `  krupalsavaliya0@gmail.com , ${data.email}`, // list of receivers
      subject: `Hello ✔ ${data.name} .   `, // Subject line
      text: "hello sir, My name is Savaliya krupal .  Thank you for connecting 🎉. We will connect soon ☺️", // plain text body
      html: `<b>${data.subject}</b> <p>your message is ${data.message} </p> hello sir, My name is Savaliya krupal .  Thank you for connecting 🎉. We will connect soon ☺️ . from krupalsavaliya0@gmail.com  to  ${data.email} `, // html body
    });

    // console.log("Message sent: %s", info.messageId);
    res.status(200).send("Email send sucessfully 🎉");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email");
  }
});
 
app.listen(4000, () => {
  console.log(`App listening on port 4000`);
});
