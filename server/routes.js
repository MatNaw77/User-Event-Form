import { addEvent } from './controllers/events.js';

async function prepareRoutes(app, database) {
    app.post('/event', async (req, res) => addEvent(req, res, database));
}

export default prepareRoutes;