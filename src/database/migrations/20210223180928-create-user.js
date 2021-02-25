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
		gender: {
			type: Sequelize.ENUM('Male', 'Female'),
		},
		birthdate: {
			type: Sequelize.DATEONLY,
			allowNull: true,
		},
		tel: {
			type: Sequelize.STRING,
			allowNull: true,
		},
		country: {
			type: Sequelize.STRING,
			allowNull: true,
		},
		city: {
			type: Sequelize.STRING,
			allowNull: true,
		},
		profilePicture: {
			type: Sequelize.STRING,
			defaultValue: 'avatar.jpg',
		},
		role: {
			type: Sequelize.STRING,
			defaultValue: 'Requester',
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
