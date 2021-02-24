import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

const { expect } = chai;

chai.use(chaiHttp);
chai.should();

const appTest = () => {
	describe('Application testing', () => {
		it('simple message to be displayed', (done) => {
			chai
				.request(app)
				.get('/')
				.end((err, res) => {
					expect(res.status).to.be.equal(200);
				});
			done();
		});
	});
};
export default appTest;
