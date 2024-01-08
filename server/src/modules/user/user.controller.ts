import { Request, Response } from "express";
import { User } from "./user.model";
import { userServices } from "./user.service";

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const result = await userServices.createUserDb(user);
    res.status(200).json({
      success: true,
      message: "user create successfully",
      result: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUserDb();

    res.status(200).json({
      success: true,
      message: "student find successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    // Check if userId is defined before using it
    if (userId) {
      const result = await userServices.getSingleUserDb(userId);

      res.status(200).json({
        success: true,
        message: "User found successfully",
        data: result,
      });
    } else {
      // Handle the case where userId is undefined
      res.status(400).json({
        success: false,
        message: "userId is not provided",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error finding user",
      error: error,
    });
  }
};
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    // Check if userId is defined before using it
    if (userId) {
      const result = await userServices.deleteUserDb(userId);

      res.status(200).json({
        success: true,
        message: "User found successfully",
        data: result,
      });
    } else {
      // Handle the case where userId is undefined
      res.status(400).json({
        success: false,
        message: "userId is not provided",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error finding user",
      error: error,
    });
  }
};

export const userController = {
  createUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
};
