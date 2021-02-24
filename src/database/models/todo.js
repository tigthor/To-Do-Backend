/* eslint-disable valid-jsdoc */
/* eslint-disable require-jsdoc */
const {
	Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class todo extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate() {
		}
	}
	todo.init({
		title: DataTypes.STRING,
		description: DataTypes.STRING,
		priority: DataTypes.ENUM('LOW', 'MEDIUM', 'HIGH')
	}, {
		sequelize,
		modelName: 'todo',
	});
	return todo;
};
