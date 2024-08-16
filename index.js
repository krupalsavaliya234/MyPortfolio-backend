const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/send-mail", async (req, res) => {
    const {email, subject,name ,message}=req.body;
    console.log(email)   
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
      to: `  krupalsavaliya0@gmail.com , ${email}`, // list of receivers
      subject: `Hello ✔ ${name} .   `, // Subject line
      text: "Thank you for connecting 🎉. We will connect soon ☺️", // plain text body
      html: `<b>${subject}</b> <p>your message is ${message} </p>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    res.send("Email send sucessfully 🎉");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email");
  }
});

app.listen(4000, () => {
  console.log("App listening on port 4000");
});
