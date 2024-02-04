import { HTTP_STATUS, HttpError }  from "../utils/response.utils.js"
import { getDAOS } from "../models/daos/index.dao.js";
const { usersDao } = getDAOS();

export class UsersService {
    async getUsers() {
      const users = await usersDao.getUsers();
      return users;
    }

    async getUserById(id) {
      if (!id) {
        throw new HttpError('Missing param', HTTP_STATUS.BAD_REQUEST)
      }
      const user = await usersDao.getUserById(id);
      if (!user) {
        throw new HttpError('User not found', HTTP_STATUS.NOT_FOUND)
      }
      return user;
    }

    async createUser(payload) {
      const { name, email } = payload;
      if (!name || !email) {
        throw new HttpError('Missing fields', HTTP_STATUS.BAD_REQUEST);
      }

      const newUserPayload = {
        name,
        email,
        role: 'USER',
        orders: []
      };

      const newUser = await usersDao.createUser(newUserPayload);
      return newUser;
    }

    async updateUser(id, payload) {
      if (!id) {
        throw new HttpError('Missing param', HTTP_STATUS.BAD_REQUEST);
      }
      const { name, email } = payload;
      if (!name || !email) {
        throw new HttpError('Missing fields', HTTP_STATUS.BAD_REQUEST);
      }
      const updatePayload = {};
      payload.name && (updatePayload.name = payload.name);
      payload.email && (updatePayload.email = payload.email);
      const updatedUser = await usersDao.updateUser(id, updatePayload);
      return updatedUser;
    }
}
