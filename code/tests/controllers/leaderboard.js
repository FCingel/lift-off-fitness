var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../app');
var expect = chai.expect;

chai.use(chaiHttp);


// describe('Leaderboard Controller (Version 1)', function() {
//   it('should list ALL articles on /articles GET');
//   it('should list a SINGLE article on /articles/:title GET');
//   it('should add a SINGLE article on /articles POST');
//   it('should update a SINGLE article on /articles/:title PUT');
//   it('should delete a SINGLE article on /articles/:title DELETE');
// });