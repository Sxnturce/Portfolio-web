import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const email = process.env.MAILER_EMAIL;
const pass = process.env.MAILER_PASS;

const transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: email,
    pass,
  },
});

async function sendMessage(client) {
  const { name, email, msg } = client;
  const info = await transporter.sendMail({
    from: `"${name} 💻✅" ${process.env.MAILER_EMAIL}`,
    to: process.env.MAILER_TO,
    replyTo: process.env.MAILER_EMAIL,
    subject: "Mensaje de posible cliente para realizar un proyecto 🔥",
    text: msg,
    html:
      `
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            color: #333;
            background-color: #f4f4f4;
            padding: 20px;
            margin: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 20px;
          }
          h1 {
            color: #007bff;
            font-size: 24px;
            border-bottom: 2px solid #007bff;
            padding-bottom: 10px;
            margin-bottom: 20px;
          }
          h2 {
            color: #333;
            font-size: 18px;
            margin-top: 0;
          }
          p {
            font-size: 16px;
            line-height: 1.5;
          }
          .footer {
            margin-top: 20px;
            font-size: 14px;
            color: #888;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Mensaje de ${name}</h1>
          <h2>Detalles del mensaje:</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Correo:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${msg}</p>
          <div class="footer">
            <p>Este correo fue enviado a través del formulario de contacto.</p>
          </div>
        </div>
      </body>
      </html>
      `,
  });
}

export default sendMessage;