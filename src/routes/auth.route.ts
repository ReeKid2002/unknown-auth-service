import { authController } from '../controllers';
import { Router } from 'express';

const router = Router();

router.route('/signup').post(authController.signUp);
router.route('/login').post(authController.login);
router.route('/validate').post(authController.validateToken);
export default router;