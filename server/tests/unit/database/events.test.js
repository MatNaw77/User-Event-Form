import { postEvent } from '../../../database/events/events.js'
import { constants } from '../../../constants/constants.js';
import prepareDatabase from '../../../prepareDatabase.js';

let database = {};

<<<<<<< HEAD
describe("Function postEvent", () => {
=======
describe("events database tests", () => {
<<<<<<< HEAD
>>>>>>> ed7db3716652ef1a938a9bd7b18f52cc091744f0
=======
>>>>>>> 71aab19c7fc734509f51eb8fb79c63b410513cdd
    beforeAll( async () => {
        database = await prepareDatabase('./__mocks__/database/mock.database.db');
    });

<<<<<<< HEAD
<<<<<<< HEAD
    it('Should return ERROR message withou arguments', async () => {
=======
    test('postEvent without arguments', async () => {
>>>>>>> ed7db3716652ef1a938a9bd7b18f52cc091744f0
=======
    test('postEvent without arguments', async () => {
>>>>>>> 71aab19c7fc734509f51eb8fb79c63b410513cdd
        const result = await postEvent();
        expect(result).toBe(constants.PARAM_ERROR);
    });

<<<<<<< HEAD
<<<<<<< HEAD
    it('Should return ERROR without database object', async () => {
=======
    test('postEvent without database object', async () => {
>>>>>>> ed7db3716652ef1a938a9bd7b18f52cc091744f0
=======
    test('postEvent without database object', async () => {
>>>>>>> 71aab19c7fc734509f51eb8fb79c63b410513cdd
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
