import { addEvent } from './controllers/events.js';
import { check } from 'express-validator';

async function prepareRoutes(app, database) {
    app.post('/events/add', [
        check('email').isEmail(),
        check('firstName', 'secondName', 'email', 'date').isString().exists().notEmpty()
      ], (req, res) => addEvent(req, res, database));
}

export default prepareRoutes;