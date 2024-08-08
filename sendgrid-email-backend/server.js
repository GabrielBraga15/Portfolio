const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');

const app = express();
const PORT = 3000;

sgMail.setApiKey('YOUR_SENDGRID_API_KEY');

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const msg = {
    to: 'gabrielferreira9034@gmail.com', // Seu e-mail
    from: email, // E-mail do remetente
    subject: `Contato de ${name}`,
    text: message,
  };

  sgMail
    .send(msg)
    .then(() => {
      res.status(200).send('Email sent successfully');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Failed to send email');
    });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
