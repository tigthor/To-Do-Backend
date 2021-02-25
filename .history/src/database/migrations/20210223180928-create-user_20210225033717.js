/* eslint-disable no-unused-vars */
/**
 * @param {object} queryInterface
 * @param {object} Sequelize
 * @returns {object} this is a sequelize migration for users
 */
export async function up(queryInterface, Sequelize) {
	await queryInterface.createTable('Users', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER,
		},
		fullname: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		isVerified: {
			type: Sequelize.BOOLEAN,
			defaultValue: false,
		},
		createdAt: {
			allowNull: false,
			type: Sequelize.DATE,
		},
		updatedAt: {
			allowNull: false,
			type: Sequelize.DATE,
		},
	});
}
/**
 * @param {object} queryInterface
 * @param {object} Sequelize
 * @returns {object} this is a sequelize migration for users
 */
export async function down(queryInterface, Sequelize) {
	await queryInterface.dropTable('Users');
}
