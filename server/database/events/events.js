import { constants } from '../../constants/constants.js';

const postEvent = async (database, eventData) => {
    if (eventData.length !== 4){
        return { msg: constants.PARAM_ERROR};
    }
    try {
        await database.run(`INSERT INTO events(firstName, secondName, email, date) VALUES(?, ?, ?, ?)`, eventData, function(err) {
            if (err) {
                console.log(err.message);
                return ;
            }  
        });
        return { result: constants.SUCCESS };
    } catch (e) {
        console.log(e);
        return { msg: constants.ERROR};
    }
}

export { postEvent };