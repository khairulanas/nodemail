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
  to: "khairul.id28@gmail.com",
  subject: "sending from nodejs",
  html: '<h1>okesip</h1>',
  attachments: [
    {
      filename: 'text.txt',
      content: 'hello cyin'
    }
  ]
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) throw err;
  console.log("email sent: " + info.response);
});

