'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate{
        notEmpty: true,
        isAlpha: true
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate{
        notEmpty: true,
        isAlpha: true
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate{
        notEmpty: true,
        isAlphanumeric: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate{
        notEmpty: true,
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING
      allowNull: false,
      validate{
        notEmpty: true,
        len: [6,100]
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};