import nodemailer from "nodemailer";
import express from "express";
import bodyParser from "body-parser";
import { error } from "console";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "pathirny@googlemail.com",
    pass: "password",
  },
});

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;
  const mailOptions = {
    from: "email@gmail.com",
    to: "pathirny@googlemail.com",
    subject: "New form",
    text: `Name ${name} email: ${email} Message: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Email send: " + info.response);
      res.send("success");
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
