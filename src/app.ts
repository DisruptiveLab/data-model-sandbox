/**
 *  @packageDocumentation
 *  @hidden
 *  Import and connect the required DBs in start().
 *  Also, close that database in end().
 */

import sequelize from './model/db/sequelize';

import './model/orm';

const start = async function start(): Promise<boolean> {
  try {
    // TODO: You should need initialize services you will use in this app.
    await sequelize.sync();
    console.log('OK!!');
  } catch (error) {
    throw error;
  }
  return true;
};

const end = async function end(): Promise<boolean> {
  try {
    await sequelize.close();
  } catch (error) {
    throw error;
  }
  return true;
};

process.on('exit', end);
start();

export default {};
