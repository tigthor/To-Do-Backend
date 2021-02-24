import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';

chai.should();
chai.use(chaiHttp);

const { expect } = chai;

describe('/GET accessing routes', () => {
	it('should check if the user is welcomed on the website', (done) => {
		chai
			.request(app)
			.get('/')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.should.have.status(200);
				res.body.should.have.property('message');
				done();
			});
	});
	it('should check if the user has accessed a wrong path', (done) => {
		chai
			.request(app)
			.get('/all')
			.end((err, res) => {
				expect(res.status).to.equal(404);
				done();
			});
	});
});
