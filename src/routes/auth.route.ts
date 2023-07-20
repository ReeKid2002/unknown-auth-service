import { authController } from "../controllers";
import { Router } from "express";

const router = Router();

router.route('/signup').post(authController.signUp);

export default router;