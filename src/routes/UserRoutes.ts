import express from "express";
import * as UserController from "../controllers/UserController";

//create sxpress router instance
const router = express.Router();

//login User
router.post('/login', UserController.loginUser);

//get user image
router.get('/get-user-image', UserController.getUserImage);

export default router;