import sqlite3 from 'sqlite3';

async function prepareDatabase (path) {
    let database = new sqlite3.Database(path, (err) => {
        if (err) {
            return console.error(err.message);
        }
        //  console.log('Connected to the file SQlite database.');
    });
    await database.run('CREATE TABLE IF NOT EXISTS events (firstName TEXT, secondName TEXT, email TEXT, date DATE)');
    
    return database;
}

export default prepareDatabase;