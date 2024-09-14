import sendEmail from "../helpers/sendEmail.js"

const clientController = async (req, res) => {
  const client = req.body
  const { name, email, msg } = client

  if (!name.trim()) {
    res.status(400).json({ msg: "Inserte un nombre valido" })
    return
  }

  if (!email.trim()) {
    res.status(400).json({ msg: "Inserte un email valido" })
    return
  }

  if (!msg.trim()) {
    res.status(400).json({ msg: "Inserte un mensaje valido" })
    return
  }

  if (msg.trim().length <= 15) {
    res.status(400).json({ msg: "Como minimo deben ser 15 caracteres" })
    return
  }

  try {
    await sendEmail(client)
    res.json({ msg: "Mensaje enviado" })
  } catch (e) {
    res.status(400).json({ err: "Error al enviar el mensaje" })
  }
}

export {
  clientController
}