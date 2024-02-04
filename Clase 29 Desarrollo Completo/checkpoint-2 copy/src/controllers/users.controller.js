import { UsersService } from "../services/users.service.js";
import { HTTP_STATUS, successResponse } from "../utils/response.utils.js";

const usersService = new UsersService();

export class UsersController {

  static async getUsers(req, res, next) {
    try {
      const users = await usersService.getUsers();
      const response = successResponse(users);
      res.status(HTTP_STATUS.OK).json(response);
    }
    catch(error) {
      next(error);
    }
  }

  static async getUserById(req, res, next) {
    const { uid } = req.params;
    try {
      const user = await usersService.getUserById(uid);
      const response = successResponse(user);
      res.status(HTTP_STATUS.OK).json(response);
    }
    catch(error) {
      next(error);
    }
  }

  static async createUser(req, res, next) {
    const userPayload = req.body;
    try {
      const newUser = await usersService.createUser(userPayload);
      const response = successResponse(newUser);
      res.status(HTTP_STATUS.CREATED).json(response);
    }
    catch(error) {
      next(error);
    }
  }
}