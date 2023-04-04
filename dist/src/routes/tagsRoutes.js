"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tags_1 = require("../controller/tags");
const router = express_1.default.Router();
router.get('/', tags_1.getTag);
router.post('/', tags_1.createTag);
exports.default = router;
//# sourceMappingURL=tagsRoutes.js.map