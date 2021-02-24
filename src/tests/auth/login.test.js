import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';

chai.should();
chai.use(chaiHttp);

const loginTest = () => {
	describe('/POST login with email and password', () => {
		it('Should be successfully logged in', (done) => {
			chai
				.request(app)
				.post('/api/auth/login')
				.send({
					email: 'loua@gmail.com',
					password: 'GoodG@12',
				})
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(200);
					res.body.should.have.property('message');
				});
			done();
		});

		it('should not pass with the wrong information', (done) => {
			chai
				.request(app)
				.post('/api/auth/login')
				.send({
					email: 'loua@gm.com',
					password: 'GoodG@12',
				})
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(400);
					res.body.should.have.property('message');
				});
			done();
		});

		it('should a valid email', (done) => {
			chai
				.request(app)
				.post('/api/auth/login')
				.send({
					email: 'louagmail.com',
					password: 'GoodG@12',
				})
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(422);
					res.body.should.have.property('message');
				});
			done();
		});

		it('should return a status 401 for non_verified user', (done) => {
			chai
				.request(app)
				.post('/api/auth/login')
				.send({
					email: 'loua1@gmail.com',
					password: 'GoodG@12',
				})
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(401);
					res.body.should.have.property('message');
				});
			done();
		});

		it('should return Incorrect credentials', (done) => {
			chai
				.request(app)
				.post('/api/auth/login')
				.send({
					email: 'loua@gmail.com',
					password: 'GoodG@1',
				})
				.end((err, res) => {
					res.body.should.be.an('object');
					res.status.should.be.equal(401);
					res.body.should.have.property('message');
				});
			done();
		});
	});
};
export default loginTest;
