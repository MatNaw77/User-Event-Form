import sqlite3 from 'sqlite3';

async function prepareDatabase () {
    let database = new sqlite3.Database('./database/database.db', (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the file SQlite database.');
    });

    return database;
}

export default prepareDatabase;