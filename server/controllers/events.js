
import { constants } from '../constants/constants.js';
import sendResponse from '../constants/sendResponse.js';
import addNewEvent from '../services/events.js';
import { validateDate, validateEmail } from '../utils/validations.js';

const addEvent = async (req, res, database) => {
    const { firstName, secondName, email, date } = req.body;
    
    if (!firstName || !secondName || !email || !date) {
        sendResponse(res, constants.PARAM_ERROR);
        return;
    }

    if (!validateEmail(email)) {
        sendResponse(res, constants.PARAM_ERROR);
        return;
    }

    if (!validateDate(date)) {
        sendResponse(res, constants.PARAM_ERROR);
        return;
    }

    const result = await addNewEvent({ database, firstName, secondName, email, date});
    await sendResponse(res, result);
}

export { addEvent };