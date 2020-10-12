const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mafiakanan@gmail.com",
    pass: "pekoxpekox"
  }
});

var mailOptions = {
  from: "mafiakanan@gmail.com",
  to: "khairul.id28@gmail.com, canuragan@gmail.com, megumikato@gmail.com",
  subject: "sending from nodejs",
  // text: "okesip"
  html: '<h1>okesip</h1>'
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) throw err;
  console.log("email sent: " + info.response);
});

