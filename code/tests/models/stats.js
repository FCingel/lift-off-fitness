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

  describe('Creating Stats', function () {
		it('Should not save when all properties are provided incorrectly',function (done) {
      models.Stats.create({
      	username: '',
        height: 'foo',
        weight: 'foo',
    	  gender: '23',
    	  gym: '',
        bench_press: 'foo',
        military_press: 'foo',
        squat: 'foo',
        deadlift: 'foo'
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
    		gym: 'Blink Fitness',
        bench_press: '225',
        military_press: '135',
        squat: '315',
        deadlift: '405'
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
