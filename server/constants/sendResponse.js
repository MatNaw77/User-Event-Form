import { constants } from './constants.js';

const responseStatuses = {
    [constants.SUCCESS]: 200,
    [constants.ERROR]: 500,
    [constants.PARAM_ERROR]: 500
};

const sendResponse = async (res, payload) => {
    try {
        await res.status(responseStatuses[payload] || 500).json({msg: payload || constants.ERROR});
    } catch (error) {
        console.error(error);
    }
}

export default sendResponse;