import express from 'express';
import http from 'http';
import expressSession from 'express-session';
import cors from 'cors';
import prepareRoutes from './routes.js';
import prepareDatabase from './prepareDatabase.js';

function logRequest(req, res, next) {
    console.info(`${req.method} ${req.originalUrl}`);
    next();
}

async function applyMiddleware (app, session) {
    app.use(logRequest);
    app.use(express.urlencoded({extended: true}));
    app.use(express.json({ limit: '1mb', extended: true }));
    app.use(session);
    app.use(cors());
}

async function prepareServer() {
    const app = express();
    const httpServer = http.createServer(app);
    const appRouter = express.Router();

    const session = expressSession({
        secret: 'my-secret',
        resave: true,
        saveUninitialized: true
    });

    const database = await prepareDatabase();

    applyMiddleware(app, session);

    prepareRoutes(appRouter, database)
    app.use('/api', appRouter);

    return httpServer;
}   

async function startServer(){
    const server = await prepareServer();
    console.log('Server is trying to run...');

    return server.listen(4000).on('error', (e) => {
        console.log(`Server cannot be started because of ${e}`);
    });
}

export { prepareServer, startServer }