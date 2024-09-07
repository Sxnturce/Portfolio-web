import express from "express"
import router from "./routes/routes.js"
import cors from "cors"

const server = express()
server.use(express.json());

const port = process.env.PORT || 4000

const whiteList = [process.env.URL_FRONTEND]
const corsOptions = {
  origin: function (origin, cb) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      cb(null, true)
    } else {
      cb(new Error("No permitido por cors"))
    }
  }
}

server.use(cors(corsOptions))

server.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
})

server.use("/api/portfolio/", router)
