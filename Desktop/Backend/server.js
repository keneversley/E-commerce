const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email Endpoint
app.post('/send-email', async (req, res) => {
  const { to, from, subject, message } = req.body;
console.log("Api call")
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Change to your email service provider
    auth: {
      user: 'Burinvgroup@gmail.com', // Replace with your email
      pass: 'Jayden0829!!', // Replace with your app password
    },
  });

  const mailOptions = {
    from,
    to,
    subject,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send email.');
  }
});

// Start the Server
const PORT = 3001; // Choose an available port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
