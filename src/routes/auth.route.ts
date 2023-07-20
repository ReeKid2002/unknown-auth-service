import { authController } from '../controllers';
import { Router } from 'express';
import { authMiddleware } from '../middleware';
import { signupSchema, loginSchema, validateTokenSchema } from '../middleware/auth.middleware.schema';

const router = Router();

router.route('/signup').post(authMiddleware(signupSchema), authController.signUp);
router.route('/login').post(authMiddleware(loginSchema), authController.login);
router.route('/validate').post(authMiddleware(validateTokenSchema), authController.validateToken);
export default router;