import { postEvent } from '../../../database/events/events.js'
import { constants } from '../../../constants/constants.js';
import prepareDatabase from '../../../prepareDatabase.js';

let database = {};

describe("events database tests", () => {

    beforeAll( async () => {
        database = await prepareDatabase('./database/mock.database.db');
    });

    test('postEvent without arguments', () => {
        expect(postEvent()).resolves.toBe(constants.PARAM_ERROR);
    });

    test('postEvent without database object', () => {
        const data = ['kira', 'nawrat', 'mat@gmai.com', '12-12-2022'];
        expect(postEvent('database', data)).resolves.toBe(constants.ERROR);
    });

    test('postEvent with good arguments', async () => {
        const data = ['kira', 'nawrat', 'mat@gmai.com', '12-12-2022'];
        const result = await postEvent(database, data);
        expect(result).toBe(constants.SUCCESS);
    });

    test('postEvent with too less arguments', async () => {
        const data = ['mateusz', 'mat@gmai.com', '12-12-2022'];
        const result = await postEvent(database, data);
        expect(result).toBe(constants.PARAM_ERROR);
    });

    test('postEvent with too many arguments', async () => {
        const data = ['mateusz', 'naw', 'mat@gmai.com', '12-12-2022', 12];
        const result = await postEvent(database, data);
        expect(result).toBe(constants.PARAM_ERROR);
    });

});
