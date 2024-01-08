import { TUser } from "./user.interface";
import { User } from "./user.model";

export const createUserDb = async (user: TUser) => {
  const result = await User.create(user);
  return result;
};
export const getAllUserDb = async () => {
  const result = await User.find();
  return result;
};
export const getSingleUserDb = async (id: string) => {
  const result = await User.findOne({ id });
  return result;
};
export const deleteUserDb = async (id: string) => {
  const result = await User.deleteOne({ id });
  return result;
};

export const userServices = {
  createUserDb,
  getAllUserDb,
  getSingleUserDb,
  deleteUserDb,
};
