var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../app');
var expect = chai.expect;

chai.use(chaiHttp);


describe('Profile Controller (Version 1)', function() {
  it('should display username');
  it('should display email');
});