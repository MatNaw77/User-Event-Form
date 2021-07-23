import { constants } from '../../constants/constants.js';

const postEvent = async (database, eventData) => {
    try {
        if (!eventData || eventData.length !== 4){
            return constants.PARAM_ERROR;
        }

        await database.run(`INSERT INTO events(firstName, secondName, email, date) VALUES(?, ?, ?, ?)`, eventData);
        return constants.SUCCESS;
    } catch (e) {
        console.log(e);
        return constants.ERROR;
    }
}

export { postEvent };