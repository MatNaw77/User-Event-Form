import { postEvent } from '../../../database/events/events.js'
import { constants } from '../../../constants/constants.js';
import prepareDatabase from '../../../prepareDatabase.js';

let database = {};

describe("events database tests", () => {


    beforeAll( async () => {
        database = await prepareDatabase('./database/mock.database.db');
    });

    test('postEvent without arguments', () => {
       expect(postEvent()).resolves.toMatchObject({msg: constants.ERROR});
    });

    test('postEvent with good arguments', async () => {
        const data = ['kira', 'nawrat', 'mat@gmai.com', '12-12-2022'];
        const result = await postEvent(database, data);
        expect(result).toMatchObject({ result: constants.SUCCESS });
    });

    test('postEvent with bad arguments', async () => {
        const data = ['mateusz', 'mat@gmai.com', '12-12-2022'];
        const result = await postEvent(database, data);
        expect(result).toMatchObject({ msg: constants.PARAM_ERROR });
    });

    test('postEvent with bad arguments', async () => {
        const data = ['mateusz', 1231231, 'mat@gmai.com', '12-12-2022'];
        const result = await postEvent(database, data);
        expect(result).toMatchObject({ msg: constants.PARAM_ERROR });
    });

});
