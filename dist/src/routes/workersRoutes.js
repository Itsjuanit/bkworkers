"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const workers_1 = require("../controllers/workers");
const validate_jwt_1 = require("../middlewares/validate-jwt");
const router = express_1.default.Router();
router.get('/', workers_1.getWorker);
router.post('/', [validate_jwt_1.validateJWT], workers_1.createWorker);
router.put('/:id', [validate_jwt_1.validateJWT], workers_1.updateWorker);
router.patch('/:id', [validate_jwt_1.validateJWT], workers_1.updateStatus);
exports.default = router;
//# sourceMappingURL=workersRoutes.js.map