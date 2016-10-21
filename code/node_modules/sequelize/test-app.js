"use strict";
/* jshint esnext:true, -W110 */

var Sequelize, sequelize, DataTypes, Promise = require('bluebird'), _ = require('lodash'), moment = require('moment');

Sequelize = DataTypes = require('./index.js');
// var db = sequelize = new Sequelize('sequelize', 'root', '', {
var db = sequelize = new Sequelize('sequelize_test', 'postgres', 'postgres', {
  dialect: 'postgres',
//var db = sequelize = new Sequelize('sequelize-test-72', 'sequelize', 'nEGkLma26gXVHFUAHJxcmsrK', {
  //dialect: 'mssql',
  //host: 'mssql.sequelizejs.com',
  //port: 11433,
  //dialect: 'sqlite',
  //storage: '/tmp/test.sqlite',
//  timezone: '+05:30',
  define: {
    // timestamps: false,
  },
  logging: console.log,
  // pool: {
  //   max: 10,
  //   min: 2,
  //   idle: 10000
  // }
});

const Document = sequelize.define('document', {
  data: DataTypes.JSONB
});

// WHERE ("document"."data"#>>'{dtPrevista}' > "document"."data"#>>'{dtConclusao}')


return sequelize.sync({
  force: true,
  logging: console.log
})
  .then(() => {
    return Document.findAll({
      where: {
        data: {
          dtPrevista:{
            $gt: sequelize.literal(`"document"."data"#>>'{dtConclusao}'`)
          }
        }
      }
    });
  })
  .finally(() => sequelize.close());
