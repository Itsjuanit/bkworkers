"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
const mongoose_1 = require("mongoose");
const TagSchema = new mongoose_1.Schema({
    name: { type: String },
});
TagSchema.methods.toJSON = function () {
    const _a = this.toObject(), { __v } = _a, tags = __rest(_a, ["__v"]);
    return tags;
};
exports.Tag = (0, mongoose_1.model)('Tag', TagSchema);
//# sourceMappingURL=tag.js.map