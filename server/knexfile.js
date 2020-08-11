// Update with your config settings.
require('dotenv').config()

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE
    },
    migrations: {
      directory: `${ __dirname }/src/database/migrations`
    },
    seeds: {
      directory: `${ __dirname }/src/database/seeds`
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: `${ __dirname }/src/database/migrations`
    },
    seeds: {
      directory: `${ __dirname }/src/database/seeds`
    }
  }
};
