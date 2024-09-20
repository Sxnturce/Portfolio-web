import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const email = process.env.MAILER_EMAIL;
const pass = process.env.MAILER_PASS;

const transporter = nodemailer.createTransport({
  host: "smtp.mailgun.org",
  port: 587,
  auth: {
    user: email,
    pass,
  },
});

async function sendMessage(client) {
  const { name, email, msg } = client;
  const now = new Date();
  const formattedDate = now.toLocaleDateString();
  const formattedTime = now.toLocaleTimeString();
  try {
    const info = await transporter.sendMail({
      from: `"${name} 💻✅" ${process.env.MAILER_EMAIL}`,
      to: process.env.MAILER_TO,
      replyTo: process.env.MAILER_EMAIL,
      subject: "Mensaje de posible cliente para realizar un proyecto 🔥",
      text: msg,
      html: `
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
            color: #0056b3;
            font-size: 24px;
            border-bottom: 2px solid #0056b3;
            padding-bottom: 10px;
            margin-bottom: 20px;
          }
          h2 {
            color: #333;
            font-size: 18px;
            margin-top: 0;
            margin-bottom:30px;
          }
          .info p {
            font-size: 16px;
            margin: 0;
          }
          .message {
            font-size: 16px;
            line-height: 1.5;
            margin-top: 20px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            background-color: #f9f9f9;
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
          <div class="info" style="gap:2rem; display:flex; margin-bottom:1rem;">
            <p style="flex-grow:1"><strong>Nombre:</strong> ${name}</p>
            <div style="flex-grow:1; display:flex;  justify-content:flex-end;">
            <p><strong>Correo:</strong> ${email}</p>
            </div>
          </div>
          <div class="info" style="gap:2rem; display:flex ; margin-bottom:1rem;">
            <p style="flex-grow:1"><strong>Fecha:</strong> ${formattedDate}</p>
            <div  style="flex-grow:1; display:flex;  justify-content:flex-end;">
            <p"><strong>Hora:</strong> ${formattedTime}</p>
            </div>
          </div>
          <div class="message">
            <strong>Mensaje:</strong>
            <p>${msg}</p>
          </div>
          <div class="footer">
            <p>Este correo fue enviado a través del formulario de contacto.</p>
          </div>
        </div>
      </body>
      </html>`,
    });
    if (info.accepted) {
      return console.log("Mensaje enviado correctamente");
    }
  } catch (e) {
    console.log("Hubo un error al intentar enviar el mensaje.");
  }
}

export default sendMessage;