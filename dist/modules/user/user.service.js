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
exports.userServices = void 0;
const db_1 = require("../../config/db");
const createUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.user.create({ data: payload });
    return result;
});
const getAllUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
        },
        orderBy: { createdAt: "desc" },
    });
    return result;
});
const getAUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.user.findUnique({
        where: {
            id: id,
        },
        select: {
            id: true,
            name: true,
            email: true,
            phone: true,
        },
    });
    return result;
});
const updateAUser = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.user.update({
        where: { id: id },
        data: payload,
    });
    return result;
});
const deleteAUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.user.delete({
        where: { id: id },
        select: {
            name: true,
            email: true,
        },
    });
    return result;
});
exports.userServices = {
    createUser,
    getAllUser,
    getAUser,
    updateAUser,
    deleteAUser,
};
