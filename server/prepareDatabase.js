import sqlite3 from 'sqlite3';

async function prepareDatabase (path) {
    let database = new sqlite3.Database(path, (err) => {
        if (err) {
            return console.error(err.message);
        }
        //  console.log('Connected to the file SQlite database.');
    });

    return database;
}

export default prepareDatabase;