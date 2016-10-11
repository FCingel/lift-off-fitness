'use strict';
module.exports = function(sequelize, DataTypes) {
  var Stats = sequelize.define('Stats', {
    username: DataTypes.STRING,
    height: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    homeGym: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Stats;
};