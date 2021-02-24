/* eslint-disable valid-jsdoc */
/* eslint-disable require-jsdoc */
const {
	Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate() {
			// define association here
		}
	}
	User.init({
		fullname: DataTypes.STRING,
		email: DataTypes.STRING,
		password: DataTypes.STRING,
		gender: DataTypes.ENUM('Male', 'Female'),
		isVerified: DataTypes.BOOLEAN
	}, {
		sequelize,
		modelName: 'User',
	});
	return User;
};
