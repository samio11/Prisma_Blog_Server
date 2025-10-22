import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { userServices } from "./user.service";

const createUser = catchAsync(async (req, res, next) => {
  const data = req.body;
  const result = await userServices.createUser(data);
  sendResponse(res, {
    success: true,
    message: "User created Done",
    statusCode: 201,
    data: result,
  });
});
const getAllUser = catchAsync(async (req, res, next) => {
  const result = await userServices.getAllUser();
  sendResponse(res, {
    success: true,
    message: "User getting Done",
    statusCode: 200,
    data: result,
  });
});
const getAUser = catchAsync(async (req, res, next) => {
  const id = Number(req.params.id);
  const result = await userServices.getAUser(id);
  sendResponse(res, {
    success: true,
    message: "User getting Done",
    statusCode: 200,
    data: result,
  });
});
const updateAUser = catchAsync(async (req, res, next) => {
  const id = Number(req.params.id);
  const data = req.body;
  const result = await userServices.updateAUser(id, data);
  sendResponse(res, {
    success: true,
    message: "User update Done",
    statusCode: 200,
    data: result,
  });
});
const deleteAUser = catchAsync(async (req, res, next) => {
  const id = Number(req.params.id);
  const result = await userServices.deleteAUser(id);
  sendResponse(res, {
    success: true,
    message: "User delete Done",
    statusCode: 200,
    data: result,
  });
});

export const userController = {
  createUser,
  getAllUser,
  getAUser,
  updateAUser,
  deleteAUser,
};
