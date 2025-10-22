import { prisma } from "../../config/db";
import { Prisma, User } from "../../generated/prisma";

const createUser = async (payload: Prisma.UserCreateInput): Promise<User> => {
  const result = await prisma.user.create({ data: payload });
  return result;
};

const getAllUser = async () => {
  const result = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    },
    orderBy: { createdAt: "desc" },
  });
  return result;
};

const getAUser = async (id: number) => {
  const result = await prisma.user.findUnique({
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
};

const updateAUser = async (id: number, payload: Partial<User>) => {
  const result = await prisma.user.update({
    where: { id: id },
    data: payload,
  });
  return result;
};

const deleteAUser = async (id: number) => {
  const result = await prisma.user.delete({
    where: { id: id },
    select: {
      name: true,
      email: true,
    },
  });
  return result;
};

export const userServices = {
  createUser,
  getAllUser,
  getAUser,
  updateAUser,
  deleteAUser,
};
