"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../controllers");
const express_1 = require("express");
const middleware_1 = require("../middleware");
const auth_middleware_schema_1 = require("../middleware/auth.middleware.schema");
const router = (0, express_1.Router)();
router.route('/signup').post(middleware_1.authMiddleware.authBodyMiddleware(auth_middleware_schema_1.signupSchema), controllers_1.authController.signUp);
router.route('/login').post(middleware_1.authMiddleware.authBodyMiddleware(auth_middleware_schema_1.loginSchema), controllers_1.authController.login);
router.route('/validate').post(middleware_1.authMiddleware.authBodyMiddleware(auth_middleware_schema_1.validateTokenSchema), controllers_1.authController.validateToken);
router.route('/user/:token').get(middleware_1.authMiddleware.authParamsMiddleware(auth_middleware_schema_1.validateTokenSchema), controllers_1.authController.getUserData);
exports.default = router;
