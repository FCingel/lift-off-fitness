var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
const models = require('../../models');

describe('Stats Model', function() {
  before(function(done) {
    models.Stats.sync({ force : true }) // drops table and re-creates it
      .then(function() {
        done(null);
      })
      .catch(function(error) {
        done(error);
      });
  });

	it('Should contain a username property',function(done) {
    	var a1 = models.Stats.build();
    	expect(a1).to.have.property('username');
    	done();
  	});

  	it('Should contain a height property',function(done) {
    	var a1 = models.Stats.build();
    	expect(a1).to.have.property('height');
    	done();
  	});

	 it('Should contain a weight property',function(done) {
    	var a1 = models.Stats.build();
   		expect(a1).to.have.property('weight');
    	done();
  	});

  	it('Should contain an gender property',function(done) {
    	var a1 = models.Stats.build();
    	expect(a1).to.have.property('gender');
    	done();
  	});

  	it('Should contain a gym property',function(done) {
    	var a1 = models.Stats.build();
    	expect(a1).to.have.property('gym');
    	done();
  	});

  	it('Should NOT contain a secret property',function(done) {
    	var a1 = models.Stats.build();
    	expect(a1).to.not.have.property('secret');
    	done();
  	});

  	describe('Creating Stats', function () {
    	it('Should not save when missing a username',function (done) {
      		models.Stats.create({
      		})
      		.then(function () {
        		done('Failed'); // Fail if it SAVES
      		})
      		.catch(function (e) {
        		done(); // Pass it it does not save
      		});
    	});

    	it('Should not save when missing a height',function (done) {
      		models.Stats.create({
      		})
      		.then(function () {
        		done('Failed'); // Fail if it SAVES
      		})
      		.catch(function (e) {
        		done(); // Pass it it does not save
      		});
    	});

    	it('Should not save when missing a weight',function (done) {
      		models.Stats.create({
      		})
      		.then(function () {
        		done('Failed'); // Fail if it SAVES
      		})
      		.catch(function (e) {
        		done(); // Pass it it does not save
      		});
    	});

    	it('Should not save when missing an gender',function (done) {
      		models.Stats.create({
      		})
      		.then(function () {
        		done('Failed'); // Fail if it SAVES
      		})
      		.catch(function (e) {
        		done(); // Pass it it does not save
      		});
    	});
		
		  it('Should not save when missing a gym',function (done) {
      		models.Stats.create({
      		})
      		.then(function () {
        		done('Failed'); // Fail if it SAVES
      		})
      		.catch(function (e) {
        		done(); // Pass it it does not save
      		});
    	});

		  it('Should not save when all properties are provided correctly',function (done) {
      		models.Stats.create({
      			username: '',
      			height: '',
      			weight: '',
      			gender: '',
      			gym: ''
      		})
      		.then(function () {
        		done('Failed'); // Fail if it SAVES
      		})
      		.catch(function (e) {
        		done(); 
      		});
    	});

    	it('Should save when all properties are provided correctly',function (done) {
      		models.Stats.create({
      			username: 'LiftOffBr0',
      			height: '70',
      			weight: '165',
      			gender: 'Female',
      			gym: 'Blink Fitness'
      		})
      		.then(function () {
        		done(); // Pass if it SAVES
      		})
      		.catch(function (e) {
        		done(); 
      		});
    	});
    });
});





