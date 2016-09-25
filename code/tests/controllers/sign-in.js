var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../app');
var expect = chai.expect;

chai.use(chaiHttp);


describe('Sign-In Controller (Version 1)', function() {
  it('should check for valid email address input');
  it('should check for valid password input corresponding to email');
});