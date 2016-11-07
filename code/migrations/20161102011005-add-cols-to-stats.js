'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.addColumn('Stats', 'bench_press', Sequelize.INTEGER)
      .then(function(){
        return queryInterface.addColumn('Stats', 'military_press', Sequelize.INTEGER)
        .then(function(){
          return queryInterface.addColumn('Stats', 'squat', Sequelize.INTEGER)
          .then(function(){
            return queryInterface.addColumn('Stats', 'deadlift', Sequelize.INTEGER)
          });
        });
      });
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.removeColumn('Stats', 'bench_press')
    .then(function(){
        return queryInterface.removeColumn('Stats', 'military_press')
        .then (function(){
          return queryInterface.removeColumn('Stats', 'squat')
          .then (function(){
            return queryInterface.removeColumn('Stats', 'deadlift')
          });
        });
      });
  }
};
