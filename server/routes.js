import constants from './constants/constants.js'
import { addEvent } from './controllers/events.js';

async function prepareRoutes(app) {
    app.post('/events/add', async (req, res) => addEvent(req, res, constants.SUCCESS));
}

export default prepareRoutes;