import { authController } from '../controllers';
import { Router } from 'express';
import { authMiddleware } from '../middleware';
import { signupSchema, loginSchema, validateTokenSchema } from '../middleware/auth.middleware.schema';

const router = Router();

router.route('/signup').post(authMiddleware.authBodyMiddleware(signupSchema), authController.signUp);
router.route('/login').post(authMiddleware.authBodyMiddleware(loginSchema), authController.login);
router.route('/validate').post(authMiddleware.authBodyMiddleware(validateTokenSchema), authController.validateToken);
router.route('/user/:token').get(authMiddleware.authParamsMiddleware(validateTokenSchema), authController.getUserData);
export default router;