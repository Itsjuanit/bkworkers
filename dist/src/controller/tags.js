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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTag = exports.createTag = void 0;
const tag_1 = require("../models/tag");
const createTag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    try {
        const tag = new tag_1.Tag({ name });
        yield tag.save();
        res.json({
            msg: 'Tag created',
            tag
        });
    }
    catch (error) {
        res.status(400).json({ msg: error });
    }
});
exports.createTag = createTag;
const getTag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tags = yield tag_1.Tag.find();
    res.json({ tags });
});
exports.getTag = getTag;
//# sourceMappingURL=tags.js.map