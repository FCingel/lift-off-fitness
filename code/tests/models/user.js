var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
const models = require('../../models');

describe('User Model', function() {
  before(function(done) {
    models.User.sync({ force : true }) // drops table and re-creates it
      .then(function() {
        done(null);
      })
      .catch(function(error) {
        done(error);
      });
  });

	  it('Should contain a username property',function(done) {
    	var a1 = models.User.build();
    	expect(a1).to.have.property('username');
    	done();
    });

  	it('Should contain a firstName property',function(done) {
    	var a1 = models.User.build();
    	expect(a1).to.have.property('firstName');
    	done();
  	});

	  it('Should contain a lastName property',function(done) {
    	var a1 = models.User.build();
   		expect(a1).to.have.property('lastName');
    	done();
  	});

  	it('Should contain an email property',function(done) {
    	var a1 = models.User.build();
    	expect(a1).to.have.property('email');
    	done();
  	});

  	it('Should contain a password property',function(done) {
    	var a1 = models.User.build();
    	expect(a1).to.have.property('password');
    	done();
  	});

  	it('Should NOT contain a secret property',function(done) {
    	var a1 = models.User.build();
    	expect(a1).to.not.have.property('secret');
    	done();
  	});

  	describe('Creating User', function () {
    	it('Should not save when missing a username',function (done) {
      		models.User.create({
      		})
      		.then(function () {
        		done('Failed'); // Fail if it SAVES
      		})
      		.catch(function (e) {
        		done(); // Pass it it does not save
      		});
    	});

    	it('Should not save when missing a firstName',function (done) {
      		models.User.create({
      		})
      		.then(function () {
        		done('Failed'); // Fail if it SAVES
      		})
      		.catch(function (e) {
        		done(); // Pass it it does not save
      		});
    	});

    	it('Should not save when missing a lastName',function (done) {
      		models.User.create({
      		})
      		.then(function () {
        		done('Failed'); // Fail if it SAVES
      		})
      		.catch(function (e) {
        		done(); // Pass it it does not save
      		});
    	});

    	it('Should not save when missing an email',function (done) {
      		models.User.create({
      		})
      		.then(function () {
        		done('Failed'); // Fail if it SAVES
      		})
      		.catch(function (e) {
        		done(); // Pass it it does not save
      		});
    	});
		
		  it('Should not save when missing a password',function (done) {
      		models.User.create({
      		})
      		.then(function () {
        		done('Failed'); // Fail if it SAVES
      		})
      		.catch(function (e) {
        		done(); // Pass it it does not save
      		});
    	});

		  it('Should not save when all properties are provided incorrectly (testing all invalid inputs)',function (done) {
      		models.User.create({
      			username: 'foofo',
      			firstName: 'Ryan213',
      			lastName: 'James687',
      			email: 'foo@foo',
      			password: 'passw',
            // fitness_goal should not exceed 140 characters
            fitness_goal: 'This is a test of the fitness_goal that should not save if there are too many characters. The current limit is 140 characters for this text. ',
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

      it('Should not save when all properties are provided incorrectly (less than length validations)',function (done) {
          models.User.create({
            username: 'foo', // username less than 4 chars
            firstName: 'Ryan213',
            lastName: 'James687',
            email: 'foo@foo',
            password: 'p;@12', // password less than 5 chars
            // fitness_goal should not exceed 140 characters
            fitness_goal: 'This is a test of the fitness_goal that should not save if there are too many characters. The current limit is 140 characters for this text. ',
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

       it('Should not save when all properties are provided incorrectly (greater than length validations)',function (done) {
          models.User.create({
            username: 'qwertyuiopasdfghjklzx', // username more than 20 chars
            firstName: '3245213',
            lastName: '6234987',
            email: '@invalidemail',  
            // password more than 100 chars
            password: 'qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm',
            // fitness_goal should not exceed 140 characters
            fitness_goal: 'This is a test of the fitness_goal that should not save if there are too many characters. The current limit is 140 characters for this text. ',
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

      it('Should save when all properties are provided correctly (within validations)',function (done) {
      		models.User.create({
      			username: 'RyanB',
      			firstName: 'Ryan',
      			lastName: 'Bassit',
      			email: 'ryanb@email.com',
      			password: 'password',
            fitness_goal: 'I like to lift, its good for the mind and the body!!',
            height: '70',
            weight: '165',
            gender: 'Female',
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

      it('Should save when all properties are provided correctly (within validations)',function (done) {
          models.User.create({
            username: 'FrankieC',
            firstName: 'Frank',
            lastName: 'Cingel',
            email: 'frankc@email.com',
            password: 'drowssap',
            fitness_goal: 'I wanna get ripped!',
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

      it('Should save when all properties are provided correctly (within validations)',function (done) {
          models.User.create({
            username: 'EdouardM',
            firstName: 'Edouard',
            lastName: 'Michel',
            email: 'edouardm@email.com',
            password: 'mypassword',
            fitness_goal: 'I wanna get the ladies!',
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

      it('Should save when all properties are provided correctly (within validations)',function (done) {
          models.User.create({
            username: 'HandsomeBanana',
            firstName: 'Ayden',
            lastName: 'James',
            email: 'aydenj@email.com',
            password: 'worldhello',
            fitness_goal: 'I want to lose 50 pounds!',
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

      it('Should save when all properties are provided correctly (within validations)',function (done) {
          models.User.create({
            username: 'JustPeachy256',
            firstName: 'Fiona',
            lastName: 'Crystal',
            email: 'dianac@email.com',
            password: 'helloworld',
            fitness_goal: 'I want to get my beach body back!!!',
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

      it('Should save when all properties are provided correctly (within validations)',function (done) {
          models.User.create({
            username: 'PrettyPotato',
            firstName: 'Christina',
            lastName: 'Renee',
            email: 'christinar@email.com',
            password: 'fitnessfanatic1',
            fitness_goal: 'I want to be healthy and strong.',
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

      it('Should save when all properties are provided correctly (within validations)',function (done) {
          models.User.create({
            username: 'LiftEveryday65',
            firstName: 'Alana',
            lastName: 'Spencer',
            email: 'alanas@email.com',
            password: 'gymfreak1',
            fitness_goal: 'I want to gain some weight!!!',
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

      it('Should save when all properties are provided correctly (within validations)',function (done) {
          models.User.create({
            username: 'TheOneAndOnly',
            firstName: 'Jessie',
            lastName: 'Ortiz',
            email: 'jessicao@email.com',
            password: 'allaboutthegains',
            fitness_goal: 'Training to join the marines.',
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

      it('Should save when all properties are provided correctly (within validations)',function (done) {
          models.User.create({
            username: 'CaptainAwesome',
            firstName: 'Dwight',
            lastName: 'Grimes',
            email: 'dwightg@email.com',
            password: 'strongestofthemall',
            fitness_goal: 'I want to be the strongest and everyone should be intimidated by me!!!!!!!!!!',
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

      it('Should save when all properties are provided correctly (within validations)',function (done) {
          models.User.create({
            username: 'OptimusPrimeRib',
            firstName: 'Carl',
            lastName: 'Junior',
            email: 'carlj@email.com',
            password: 'transformerguy',
            fitness_goal: 'I eat dumbbells for breakfast.',
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
      
      it('Should save when all properties are provided correctly (within validations)',function (done) {
          models.User.create({
            username: 'AngryMom',
            firstName: 'Simone',
            lastName: 'Garden',
            email: 'simoneg@email.com',
            password: 'mypassword',
            fitness_goal: 'All I gotta say is... dont mess with me.',
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

      it('Should save when all properties are provided correctly (within validations)',function (done) {
          models.User.create({
            username: 'GetOutMyWhey',
            firstName: 'Murphy',
            lastName: 'Appleseed',
            email: 'murphya@email.com',
            password: 'mypassword',
            fitness_goal: 'Training for my next triathlon!!',
            height: '67',
            weight: '171',
            gender: 'Male',
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

      it('Should save when all properties are provided correctly (within validations)',function (done) {
          models.User.create({
            username: 'ChunkyLover',
            firstName: 'Johnny',
            lastName: 'Walker',
            email: 'jhonniew@email.com',
            password: 'mypassword',
            fitness_goal: 'Trying to improve my physique!',
            height: '83',
            weight: '330',
            gender: 'Male',
            gym: 'Blink Fitness',
            bench_press: '155',
            military_press: '95',
            squat: '455',
            deadlift: '210'
          })
          .then(function () {
            done(); // Pass if it SAVES
          })
          .catch(function (e) {
            done(); 
          });
      });

      it('Should save when all properties are provided correctly (within validations)',function (done) {
          models.User.create({
            username: 'GoodOldJim',
            firstName: 'Jim',
            lastName: 'Smith',
            email: 'JimSmith@email.com',
            password: 'mypassword',
            fitness_goal: 'I gotta get rid of this gut.',
            height: '87',
            weight: '222',
            gender: 'Male',
            gym: 'My House',
            bench_press: '175',
            military_press: '105',
            squat: '255',
            deadlift: '225'
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
