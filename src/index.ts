/**
 *  @packageDocumentation
 *  @hidden
 *  Starts the server listening to a port.
 */

import http from 'http';

import CONFIG from './config';
import app from './app';

const server = http.createServer(app);

server.listen(CONFIG.PORT);
console.log(`Listening on port ${CONFIG.PORT}`);
