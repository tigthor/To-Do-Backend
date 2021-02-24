import chai from 'chai';
import chaiHttp from 'chai-http';
import sendGrid from '@sendgrid/mail';
import sinon from 'sinon';
import app from '../../server';

import {
	userValidate,
	userEmailExist,
	userToVerify,
} from '../fixtures/user.fixture';

chai.should();
chai.use(chaiHttp);

const signUpTest = () => {
	describe('/POST signup and emaill is sent on success', () => {
		before(async () => {
			sinon.stub(sendGrid, 'send').returns({
				to: userToVerify.email,
				from: 't0780586360@gmail.com',
				subject: 'Account Verification',
				html: `<strong> Dear ${userToVerify.fullname}, please open this <a href="#">link</a> to verify your account </strong>`,
			});
		});
		after(() => {
			sinon.restore();
		});
		it('Should register a user and send email on success', (done) => {
			chai
				.request(app)
				.post('/api/auth/signup')
				.send(userToVerify)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(201);
					res.body.should.have.property('message');
				});
			done();
		});

		it('Should validate user inputs', (done) => {
			chai
				.request(app)
				.post('/api/auth/signup')
				.send(userValidate)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(422);
					res.body.should.have.property('message');
				});
			done();
		});
		it('Should check if email exists', (done) => {
			chai
				.request(app)
				.post('/api/auth/signup')
				.send(userToVerify)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(409);
					res.body.should.have.property('message');
				});
			done();
		});
	});
};

export default signUpTest;
