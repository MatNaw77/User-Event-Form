import { validationResult } from 'express-validator';
import { constants } from '../constants/constants.js';
import sendResponse from '../constants/sendResponse.js';
import addNewEvent from '../services/events.js';

const addEvent = async (req, res, database) => {
    const { firstName, secondName, email, date } = req.body;
    const errors = validationResult(req);

    if (!errors.length === 0) {
        await sendResponse(res, constants.PARAM_ERROR);
        return;
    }

    const result = await addNewEvent({ database, firstName, secondName, email, date});
    await sendResponse(res, result);
}

export { addEvent };