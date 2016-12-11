'use strict';
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt-nodejs');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isAlphanumeric: true,
        len: [4,20]
      }
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isAlpha: true,
        len: [1, 30]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isAlpha: true,
        len: [1, 30]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
        len: [1, 100]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [6,100]
      }
    },
    fitness_goal: {
      type: DataTypes.TEXT,
      validate: {
        len: [0,140]
      }
    },
    height: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        isNumeric: true
      }
    },
    weight: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        isNumeric: true
      }
    },
    gender: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true
      }
    },
    gym: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 50]
      }
    },
    bench_press: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        isNumeric: true
      } 
    },
    military_press: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        isNumeric: true
      }
    },
    squat: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        isNumeric: true
      }
    },
    deadlift: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        isNumeric: true
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  User.beforeCreate((User) =>
    new sequelize.Promise((resolve) => {
      bcrypt.hash(User.password, null, null, (err, hashedPassword) => {
        resolve(hashedPassword);
      });
    }).then((hashedPw) => {
      User.password = hashedPw;
    })
  );
  return User;
};