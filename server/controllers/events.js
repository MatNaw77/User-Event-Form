import constants from '../constants/constants.js';
import sendResponse from '../constants/sendResponse.js'

const addEvent = async (req, res) => {
    const { firstName, secondName, email, date } = req.body;

    if (!firstName || !secondName || !email || !date) {
        sendResponse(res, constants.MISSING_PARAMS);
        return;
    }

    const result = "git";
    sendResponse(res, result);
}

export { addEvent };