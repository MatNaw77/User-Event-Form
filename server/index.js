import { startServer } from './setupServer.js';

(async function () {
    await startServer();
    console.log('Server started');
})();