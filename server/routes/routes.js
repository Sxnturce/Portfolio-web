import Router from "express";
import { clientController } from "../controllers/clientController.js";

const router = Router()

router.post("/", clientController)



export default router