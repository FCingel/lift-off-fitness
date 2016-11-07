'use strict';
module.exports = function(sequelize, DataTypes) {
  var Stats = sequelize.define('Stats', {
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isAlphanumeric: true
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
  return Stats;
};