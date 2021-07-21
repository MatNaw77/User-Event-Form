import { validationResult } from 'express-validator';
import { constants } from '../constants/constants.js';
import sendResponse from '../constants/sendResponse.js';
import { addNewEvent } from '../services/events.js';

const addEvent = async (req, res, database) => {
    const { firstName, secondName, email, date } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        sendResponse(res, constants.PARAM_ERROR);
        return;
    }

    const result = await addNewEvent({ database, firstName, secondName, email, date});
    sendResponse(res, result);
}

export { addEvent };