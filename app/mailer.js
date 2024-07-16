const nodemailer = require('nodemailer')


export default async function sendEmail (name, email, message) {

  let transporter = nodemailer.createTransport({
    service: 'gmail', auth: {
      user: 'mailerthomaspiet@gmail.com', pass: 'ltjs wrun pjxp nxov',
    },
  })

  let mailOptions = {
    from: 'mailerthomaspiet@gmail.com',
    to: "mailerthomaspiet@gmail.com",
    subject: 'Vous avez reçu une demande de contact.',
    text: `Nom: ${name};    email: ${email};  message: ${message} `,
  }

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email envoyé: ' + info.response);
    }
  });
}

