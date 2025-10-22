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
exports.userController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const user_service_1 = require("./user.service");
const createUser = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result = yield user_service_1.userServices.createUser(data);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "User created Done",
        statusCode: 201,
        data: result,
    });
}));
const getAllUser = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.userServices.getAllUser();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "User getting Done",
        statusCode: 200,
        data: result,
    });
}));
const getAUser = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const result = yield user_service_1.userServices.getAUser(id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "User getting Done",
        statusCode: 200,
        data: result,
    });
}));
const updateAUser = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const data = req.body;
    const result = yield user_service_1.userServices.updateAUser(id, data);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "User update Done",
        statusCode: 200,
        data: result,
    });
}));
const deleteAUser = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const result = yield user_service_1.userServices.deleteAUser(id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "User delete Done",
        statusCode: 200,
        data: result,
    });
}));
exports.userController = {
    createUser,
    getAllUser,
    getAUser,
    updateAUser,
    deleteAUser,
};
