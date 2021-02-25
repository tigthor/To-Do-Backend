/* eslint-disable no-unused-vars */
import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
	/**
   * This is the class for dealng with database models
   */
	class User extends Model {}
	User.init(
		{
			fullname: DataTypes.STRING,
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			isVerified: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: 'User',
		}
	);
	User.associate = (models) => {
	};
	return User;
};
