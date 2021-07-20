import constants from '../../constants/constants.js';

const postEvent = async (database, eventData) => {
    try {
        await database.run(`INSERT INTO events(firstName, secondName, email, date) VALUES(?, ?, ?, ?)`, eventData, function(err) {
            if (err) {
                return console.log(err.message);
            }
            return { result: constants.SUCCESS, eventId: this.lastID };
        });
    } catch (e) {
        console.log(e);
        return { msg: constants.ERROR};
    }
}

export { postEvent };