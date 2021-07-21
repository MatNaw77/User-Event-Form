import { constants } from '../../constants/constants.js';

const postEvent = async (database, eventData) => {
    if (eventData.length !== 4){
        return constants.PARAM_ERROR;
    }

    try {
        await database.run(`INSERT INTO events(firstName, secondName, email, date) VALUES(?, ?, ?, ?)`, eventData);
        return constants.SUCCESS;
    } catch (e) {
        console.log(e);
        return constants.ERROR;
    }
}

export { postEvent };