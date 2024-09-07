import express from "express"
import router from "./routes/routes.js"

const server = express()

server.use(express.json());
const port = process.env.PORT || 4000

server.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
})

server.use("/api/portfolio/", router)
