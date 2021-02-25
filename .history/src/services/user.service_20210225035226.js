import models from '../database/models';

const { User } = models;

/**
 * this is a user service
 */
class UserService {
	/**
   * @param {object} user
   * @return {object} this is a service for creating a user
   */
	static createUser(user) {
		return User.create(user);
	}

	/**
   * @param {object} attribute
   * @param {object} property
   * @return {object} update user by attribute
   */
	static async updateUserByAttribute(attribute, property) {
		return User.update(property, { where: attribute });
	}

	/**
   * @param {object} attribute
   * @returns {object} getting a user that is already logged in
   */
	static findUserByAttribute(attribute) {
		return User.findOne({ where: attribute });
	}

	/**
   * @param {string} instance
   * @param {object} property
   * @returns {object} this update a given user
   */
	static updateProperty(instance, property) {
		return User.update(property, { where: instance });
	}

	/**
   *
   * @param {object} property
   * @param {object} property1
   * @returns {object} this return a given user based by property
   */
	static findUserByProperty(property) {
		return User.findOne({ where: property });
	}

	/**
   * @param {integer} managerId id of the manager to be finding
   * @returns {object} data of the manager found
   */
	static async assignUserManager(managerId) {
		const managerData = await models.assignUserManager(db.user, managerId);

		if (!managerData) return false;
		return true;
	}

	/**
   *
   * @param {object} property
   * @returns {object} this return a given user based by property
   */
}
export default UserService;
