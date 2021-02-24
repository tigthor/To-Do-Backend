import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';
import {
	userToVerify,
	createUser,
	tokenToVerify,
} from '../fixtures/user.fixture';

chai.should();
chai.use(chaiHttp);

const userVerificationTest = () => {
	describe('/PATCH email verification', () => {
		before(() => {
			createUser(userToVerify);
		});
		it('Should verify a user', (done) => {
			chai
				.request(app)
				.patch(`/api/auth/activate?token=${tokenToVerify}`)
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(200);
					res.body.should.have.property('message');
				});
			done();
		});
	});
};

export default userVerificationTest;
