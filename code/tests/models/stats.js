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
      	username: 'RyanB',
    		height: '70',
    		weight: '165',
  			gender: 'Male',
    		gym: 'Blink Fitness',
        bench_press: '225',
        military_press: '160',
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
    it('Should save when all statistics are provided correctly',function (done) {
      models.Stats.create({
        username: 'FrankieC',
        height: '90',
        weight: '205',
        gender: 'Male',
        gym: 'Planet Fitness',
        bench_press: '315',
        military_press: '155',
        squat: '400',
        deadlift: '450'
      })
        .then(function () {
          done(); // Pass if it SAVES
        })
        .catch(function (e) {
          done(); 
        });
    });
    it('Should save when all statistics are provided correctly',function (done) {
      models.Stats.create({
        username: 'EduoardM',
        height: '95',
        weight: '188',
        gender: 'Male',
        gym: 'Ballys Total Fitness',
        bench_press: '195',
        military_press: '170',
        squat: '300',
        deadlift: '415'
      })
        .then(function () {
          done(); // Pass if it SAVES
        })
        .catch(function (e) {
          done(); 
        });
    });
    it('Should save when all statistics are provided correctly',function (done) {
      models.Stats.create({
        username: 'HandsomeBanana7',
        height: '93',
        weight: '240',
        gender: 'Male',
        gym: 'Crunch',
        bench_press: '160',
        military_press: '135',
        squat: '240',
        deadlift: '265'
      })
        .then(function () {
          done(); // Pass if it SAVES
        })
        .catch(function (e) {
          done(); 
        });
    });
    it('Should save when all statistics are provided correctly',function (done) {
      models.Stats.create({
        username: 'DollFace21',
        height: '55',
        weight: '136',
        gender: 'Female',
        gym: 'Blink Fitness',
        bench_press: '65',
        military_press: '35',
        squat: '135',
        deadlift: '95'
      })
        .then(function () {
          done(); // Pass if it SAVES
        })
        .catch(function (e) {
          done(); 
        });
    });
    it('Should save when all statistics are provided correctly',function (done) {
      models.Stats.create({
        username: 'PrettyPotato',
        height: '63',
        weight: '134',
        gender: 'Female',
        gym: 'Planet Fitness',
        bench_press: '80',
        military_press: '55',
        squat: '165',
        deadlift: '140'
      })
        .then(function () {
          done(); // Pass if it SAVES
        })
        .catch(function (e) {
          done(); 
        });
    });
    it('Should save when all statistics are provided correctly',function (done) {
      models.Stats.create({
        username: 'Beautylicious',
        height: '72',
        weight: '123',
        gender: 'Female',
        gym: 'Ballys Total Fitness',
        bench_press: '45',
        military_press: '25',
        squat: '55',
        deadlift: '70'
      })
        .then(function () {
          done(); // Pass if it SAVES
        })
        .catch(function (e) {
          done(); 
        });
    });
    it('Should save when all statistics are provided correctly',function (done) {
      models.Stats.create({
        username: 'Barbie1995',
        height: '78',
        weight: '160',
        gender: 'Female',
        gym: 'Crunch',
        bench_press: '140',
        military_press: '100',
        squat: '225',
        deadlift: '225'
      })
        .then(function () {
          done(); // Pass if it SAVES
        })
        .catch(function (e) {
          done(); 
        });
    });    
    it('Should save when all statistics are provided correctly',function (done) {
      models.Stats.create({
        username: 'CaptainAwesome',
        height: '86',
        weight: '172',
        gender: 'Male',
        gym: 'Retro Fitness',
        bench_press: '170',
        military_press: '300',
        squat: '510',
        deadlift: '675'
      })
        .then(function () {
          done(); // Pass if it SAVES
        })
        .catch(function (e) {
          done(); 
        });
    });
    it('Should save when all statistics are provided correctly',function (done) {
      models.Stats.create({
        username: 'OptimusPrimeRib',
        height: '95',
        weight: '275',
        gender: 'Male',
        gym: 'Retro Fitness',
        bench_press: '335',
        military_press: '200',
        squat: '180',
        deadlift: '275'
      })
        .then(function () {
          done(); // Pass if it SAVES
        })
        .catch(function (e) {
          done(); 
        });
    });                  
    it('Should save when all statistics are provided correctly',function (done) {
      models.Stats.create({
        username: 'AngryMom',
        height: '67',
        weight: '171',
        gender: 'Female',
        gym: 'Ballys Total Fitness',
        bench_press: '230',
        military_press: '130',
        squat: '205',
        deadlift: '210'
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
