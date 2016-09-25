var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../app');
var expect = chai.expect;

chai.use(chaiHttp);


describe('Home Controller (Version 1)', function() {
  it('should contain a link to sign-up on /sign-up GET');
  it('should contain a link to sign-in on /sign-in GET');
  it('should contain a link to leaderboard on /leaderboard GET');
});