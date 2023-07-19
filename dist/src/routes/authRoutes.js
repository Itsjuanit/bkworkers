"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const auth_1 = require("../controllers/auth");
const validate_jwt_1 = require("../middlewares/validate-jwt");
const router = (0, express_1.Router)();
router.get('/', [
    validate_jwt_1.validateJWT
], auth_1.validateTokenUser);
router.post('/login', [
    (0, express_validator_1.check)('email', 'the email address is required').isEmail(),
    (0, express_validator_1.check)('password', 'the password is required').not().isEmpty(),
], auth_1.login);
exports.default = router;
//# sourceMappingURL=authRoutes.js.map