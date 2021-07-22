import { postEvent } from '../../../database/events/events.js'
import { constants } from '../../../constants/constants.js';
import prepareDatabase from '../../../prepareDatabase.js';

let database = {};

describe("Function postEvent", () => {
    beforeAll( async () => {
        database = await prepareDatabase('./__mocks__/database/mock.database.db');
    });

    it('Should return ERROR message withou arguments', async () => {
        const result = await postEvent();
        expect(result).toBe(constants.PARAM_ERROR);
    });

    it('Should return ERROR without database object', async () => {
        const data = ['kira', 'nawrat', 'mat@gmai.com', '12-12-2022'];
        const result = await postEvent('database', data);
        expect(result).toBe(constants.ERROR);
    });

    it('Should return SUCCESS with good arguments', async () => {
        const data = ['kira', 'nawrat', 'mat@gmai.com', '12-12-2022'];
        const result = await postEvent(database, data);

        expect(result).toBe(constants.SUCCESS);
    });

    it('Should return ERROR with too less arguments', async () => {
        const data = ['mateusz', 'mat@gmai.com', '12-12-2022'];
        const result = await postEvent(database, data);

        expect(result).toBe(constants.PARAM_ERROR);
    });

    it('Should return ERROR with too many arguments', async () => {
        const data = ['mateusz', 'naw', 'mat@gmai.com', '12-12-2022', 12];
        const result = await postEvent(database, data);

        expect(result).toEqual(constants.PARAM_ERROR);
    });
});
