import express from "express";
import * as UserController from "../controllers/UserController";

//create sxpress router instance
const router = express.Router();

//add New User
router.post('/new', UserController.createNewUser);

export default router;