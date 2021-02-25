/**
 *  @packageDocumentation
 *  @hidden
 *  Loads configuration from environment.
 *  TODO: You should read all this file to see if it's according to your needs.
 *  For example, you might need to delete SQL or Mongo options.
 *  Depending in which database you use, you will have to install the drivers for sequelize: https://sequelize.org/master/manual/getting-started.html
 */

const CONFIG = {
  /**
   *  Node environment.
   */
  NODE_ENV: 'development',

  /**
   *  Application name.
   */
  APP_NAME: 'Data model test',

  /**
   *  Port the APP listens to.
   */
  PORT: 3000,

  /**
   *  Database configuration.
   */
  DB: {
    /**
     *  SQL Configuration.
     */
    SQL: {
      /**
       *  Database host.
       */
      HOST: 'localhost',

      /**
       *  Database name.
       */
      DATABASE: 'test',

      /**
       *  Database username.
       */
      USERNAME: 'root',

      /**
       *  Database password.
       */
      PASSWORD: 'matias',

      /**
       *  Database dialect for sequelize (postgres, sqlite, sql, mysql...).
       */
      DIALECT: 'mysql',
    },
  },
};

export default CONFIG;
