import constants from './constants.js';

const responseStatuses = {
    [constants.SUCCESS]: 200,
    [constants.ERROR]: 500,
    [constants.MISSING_PARAMS]: 500
};

const sendResponse = (res, payload) => {
    res.status(responseStatuses[payload] || 200).json({msg: payload});
}

export default sendResponse;