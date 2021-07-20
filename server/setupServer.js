import express from 'express';
import http from 'http';
import expressSession from 'express-session';
import cors from 'cors';
import prepareRoutes from './routes.js';

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
    app.use((err, req, res, next) => {
        if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
            console.error(err);
            return res.status(400).send(err.type);
        }
    });
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

    applyMiddleware(app, session);

    prepareRoutes(appRouter)
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