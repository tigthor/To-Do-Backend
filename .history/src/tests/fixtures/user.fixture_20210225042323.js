import TokenService from '../../services/token.service';
import UserService from '../../services/user.service';

export const userToVerify = {
	fullname: 'Alan Shearer',
	email: 'tigthor1337@gmail.com',
	password: 'InWebThereisaserverticktockkk1!!21',
};
export const verifyPassword = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkJNdWd3YW5lemE3MjBAZGF2aXNjb2xsZWdlLmNvbSIsImlhdCI6MTYwODEyNjQ2MywiZXhwIjoxNjA4MTk4NDYzfQ.4AgjkwRY1Y0Ju5T8dLgYdKs7upf8vXZ80s5tWkQiIzc';
export const userValidate = {
	fullname: 'Alan Shearer',
	password: 'InWebThereisaserverticktockkk1!!21',
	gender: 'Male',
};

export const userEmailExist = {
	fullname: 'Alan Shearer',
	email: 'tigthor1337@gmail.com',
	password: 'InWebThereisaserverticktockkk1!!21',
	birthdate: '2020-01-01',
	gender: 'Male',
};

export const newUser = {
	id: 90,
	fullname: 'Smith Kendy',
	email: 'smith@gmail.com',
	password: 'Token123',
	gender: 'Male',
};
export const mockToken = TokenService.generateToken(newUser);

export const token = TokenService.generateToken({
	id: newUser.id,
	fullname: newUser.fullname,
	email: newUser.email,
	gender: newUser.gender,
	createdAt: newUser.createdAt,
	updatedAt: newUser.updatedAt,
});

export const tokenToVerify = TokenService.generateToken({
	email: userToVerify.email,
});

export const fakeToken = 'eyJhbGciOiJIUzI1NiIsInRcCI6IkpXVCJ9.eyJpZCI6NTEsImZ1bGxuYW1lIjoiTG91YW5nZSBNdWhhd2UiLCJlbWFpbCI6IkxtdWhhd2VuQGdtYWlsLmNvbSIsImJpcnRoZGF0ZSI6IjE5OTAtMDEtMDEiLCJnZW5kZXIiOiJmZW1hbGUiLCJ0ZWwiOiIwNzAwMDAwMDAwIiwiY291bnRyeSI6InppbWJhYndlIiwiY2l0eSI6IktpZ2FsaSIsInByb2ZpbGVQaWN0dXJlIjoiYXZhdGFyLmpwZyIsInJvbGUiOiJSZXF1ZXN0ZXIiLCJjcmVhdGVkQXQiOiIyMDIwLTEyLTA1VDEyOjU3OjI2Ljg0OVoiLCJ1cGRhdGVkQXQiOiIyMDIwLTEyLTA1VDEyOjU3OjI2Ljg0OVoiLCJpYXQiOjE2MDcxNzMwNDcsImV4cCI6MTYwNzI0NTA0N30.FrK9rssbqZEgvcEuRlMyfAWt9ThurBQ1FmLfOBO9YsU';

export const expiredToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbG5hbWUiOiJBbGFuIFNoZWFyZXIiLCJlbWFpbCI6InRpZ3Rob3IxMzM3QGdtYWlsLmNvbSIsImJpcnRoZGF0ZSI6IjIwMjAtMDEtMDEiLCJnZW5kZXIiOiJtYWxlIiwidGVsIjoiMDc4OTAwMDAwMCIsImNvdW50cnkiOiJrZW55YSIsImNpdHkiOiJtb21iYXNhIiwiaWF0IjoxNjA3MTc0MzE4LCJleHAiOjE2MDcxNzQzMjN9.KDmaQt0r3kVbkeAnxWcmjGOWjZYnR4PIDT9QhwF1JSE';

export const createUser = async () => {
	await UserService.createUser(newUser);
};

export const passwordMatch = {
	password: 'Lulu@1230!',
	confirmPassword: 'Lulu@1230!',
};
export const passwordDonotMatch = {
	password: 'Lulu@1237',
	confirmPassword: 'Lulu@123556',
};

export const tokenToUse = TokenService.generateToken({
	id:1,
	fullname: 'LouangeMu',
	email: 'loua@gmail.com',
	gender: 'Female',
	isVerified: true
});
