"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = require("../models/user");
const validateJWT = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const token = req.header('x-token');
    if (!token) {
        return res.json({
            msg: 'there is not token in the request'
        });
    }
    try {
        const secret = (_a = process.env.SECRETORPRIVATEKEY) !== null && _a !== void 0 ? _a : '';
        const { uid } = jsonwebtoken_1.default.verify(token, secret);
        const user = yield user_1.User.findById(uid);
        if (!user) {
            return res.status(401).json({
                msg: 'the user not exits in DB'
            });
        }
        if (!user.status) {
            return res.status(401).json({
                msg: 'User desactivated'
            });
        }
        req.user = user;
        next();
    }
    catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token is not valid'
        });
    }
});
exports.validateJWT = validateJWT;
//# sourceMappingURL=validate-jwt.js.map