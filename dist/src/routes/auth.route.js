"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../controllers");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.route('/signup').post(controllers_1.authController.signUp);
router.route('/login').post(controllers_1.authController.login);
router.route('/validate').post(controllers_1.authController.validateToken);
exports.default = router;
