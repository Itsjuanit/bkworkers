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
exports.updateStatus = exports.updateWorker = exports.getWorker = exports.createWorker = void 0;
const worker_1 = require("../models/worker");
const createWorker = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, tag, phone_number, opinion } = req.body;
    try {
        const worker = new worker_1.Worker({ name, tag, phone_number, opinion });
        yield worker.save();
        res.json({
            msg: 'worker created',
            worker
        });
    }
    catch (error) {
        res.status(400).json({ msg: error });
    }
});
exports.createWorker = createWorker;
const getWorker = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { status } = req.query;
    if (status) {
        const worker = yield worker_1.Worker.find({ status }).populate('tag', 'name');
        res.json({ worker });
    }
    else {
        const worker = yield worker_1.Worker.find().populate('tag', 'name');
        res.json({ worker });
    }
});
exports.getWorker = getWorker;
const updateWorker = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req);
    const { id } = req.params;
    const { name, tag, phone_number, opinion, status } = req.body;
    try {
        const worker = yield worker_1.Worker.findByIdAndUpdate(id, { name, tag, phone_number, opinion, status }, { new: true });
        res.json({
            msg: 'worker updated',
            worker
        });
    }
    catch (error) {
        res.status(400).json({ msg: error });
    }
});
exports.updateWorker = updateWorker;
const updateStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { status } = req.body;
    try {
        const worker = yield worker_1.Worker.findByIdAndUpdate(id, { status }, { new: true });
        res.json({
            msg: 'worker changed status',
            worker
        });
    }
    catch (error) {
        res.status(400).json({ msg: error });
    }
});
exports.updateStatus = updateStatus;
//# sourceMappingURL=workers.js.map