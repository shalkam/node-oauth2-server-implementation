/**
 * Created by Manjesh on 14-05-2016.
 */

module.exports = {
  sql: {
    database: 'oauth_demo',
    username: 'root',
    password: '',
    dialect: 'mysql', // PostgreSQL, MySQL, MariaDB, SQLite and MSSQL See more: http://docs.sequelizejs.com/en/latest/
    logging: true,
    timezone: '+05:30',
  },
  mongo: {
    uri: 'mongodb://127.0.0.1:27017/oauth2-example'
  },
  seedDB:false,
  seedMongoDB:false,
  seedDBForce:false,
  db:'mongo' // mongo,sql if you want to use any SQL change dialect above in sql config
}
