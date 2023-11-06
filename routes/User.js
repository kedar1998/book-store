import express from "express";
import { signInController, signUpController } from "../controllers/User.js";

const router = express.Router();

// Sign In Route
router.route("/sign-in").post(signInController);

// Sign Up Route
router.route("/sign-up").post(signUpController);

export default router;
