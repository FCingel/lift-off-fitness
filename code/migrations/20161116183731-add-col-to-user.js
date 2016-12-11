'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.addColumn('Users', 'fitness_goal', Sequelize.TEXT)
      .then(function(){
      return queryInterface.addColumn('Users', 'bench_press', Sequelize.INTEGER)
        .then(function(){
        return queryInterface.addColumn('Users', 'military_press', Sequelize.INTEGER)
          .then(function(){
          return queryInterface.addColumn('Users', 'squat', Sequelize.INTEGER)
            .then(function(){
            return queryInterface.addColumn('Users', 'deadlift', Sequelize.INTEGER)
              .then(function(){
              return queryInterface.addColumn('Users', 'height', Sequelize.INTEGER)
                .then(function(){
                return queryInterface.addColumn('Users', 'weight', Sequelize.INTEGER)
                  .then(function(){
                  return queryInterface.addColumn('Users', 'gender', Sequelize.STRING)
                    .then(function(){
                    return queryInterface.addColumn('Users', 'gym', Sequelize.STRING)
                    });
                  });
                });
              });
            });
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
    return queryInterface.removeColumn('Users', 'fitness_goal')
      .then(function(){
      return queryInterface.removeColumn('Users', 'bench_press')
        .then(function(){
        return queryInterface.removeColumn('Users', 'military_press')
          .then(function(){
          return queryInterface.removeColumn('Users', 'squat')
            .then(function(){
            return queryInterface.removeColumn('Users', 'deadlift')
              .then(function(){
              return queryInterface.removeColumn('Users', 'height')
                .then(function(){
                return queryInterface.removeColumn('Users', 'weight')
                  .then(function(){
                  return queryInterface.removeColumn('Users', 'gender')
                    .then(function(){
                    return queryInterface.removeColumn('Users', 'gym')
                    });
                  });
                });
              });
            });
          });
        });
      });
  }
};
