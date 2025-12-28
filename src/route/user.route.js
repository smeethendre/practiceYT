import { Router } from "express";
import { registerUser } from "../controller/user.controller.js";

const router = Router();


  router.post("/signup", registerUser);


export { router };
