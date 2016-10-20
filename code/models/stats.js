'use strict';
module.exports = function(sequelize, DataTypes) {
  var Stats = sequelize.define('Stats', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate{
        notEmpty: true,
        isAlphanumeric: true
      }
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate{
        notEmpty: true,
        isNumeric: true
      }
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate{
        notEmpty: true,
        isNumeric: true
      }
    },
    gender: {
      type: DataTypes.STRING,
      allowNull:false,
      validate{
        notEmpty: true,
        isAlpha: true
      }
    },
    homeGym: {
      type: DataTypes.STRING,
      allowNull: false,
      validate{
        notEmpty: true
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