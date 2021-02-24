import models from '../database/models';

const { User } = models;

/**
 * This is a class dealing with Users
 */
class UserService {
    /**
     * @param {object} user
     * @returns {object} create a new user
     */
    static createUser = (user) => User.create(user)

    /**
     * @param {object} attribute
     * @returns {object} find a single user by attribute
     */
    static findUserByAttribute = (attribute) => User.findOne({ where: attribute })

    /**
   * @param {object} attribute
   * @param {object} payload
   * @returns {object} update any user by attribute
   */
  static updateUserByAttribute = (attribute, payload) => User.update(payload, { where: attribute });
}

export default UserService;
