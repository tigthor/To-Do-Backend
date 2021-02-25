/* eslint-disable valid-jsdoc */
/* eslint-disable require-jsdoc */
const {
	Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class todo extends Model {
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
