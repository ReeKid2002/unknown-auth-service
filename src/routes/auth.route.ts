import { authController } from '../controllers';
import { Router } from 'express';

const router = Router();

router.route('/signup').post(authController.signUp);
router.route('/login').post(authController.login);
export default router;