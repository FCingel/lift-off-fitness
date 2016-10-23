var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../app');
var expect = chai.expect;

chai.use(chaiHttp);


describe('Home Controller (Version 1)', () => {
  it('should contain a link to sign-up on /home GET', (done) =>{
  	chai.request(server)
  		.get('/sign-up')
  		.end((err, res) => {
  			expect(res.status).to.equal(200);
  			expect(res).to.be.html;
  			done();
  		});
  	});	

  it('should contain a link to sign-in on /home GET', (done) =>{
  	chai.request(server)
  		.get('/sign-in')
  		.end((err, res) => {
  			expect(res.status).to.equal(200);
  			expect(res).to.be.html;
  			done();
  		});
  	});	

  // it('should contain a link to leaderboard on /home GET', (done) =>{
  // 	chai.request(server)
  // 		.get('/leaderboard')
  // 		.end((err, res) => {
  // 			expect(res.status).to.equal(200);
  // 			expect(res).to.be.html;
  // 			done();
  // 		});
  // 	});	
});