import addNewEvent from '../../../services/events.js';
import { mockRequest, mockResponse } from '../../reqResMocks.js';
import { constants } from '../../../constants/constants.js';

jest.mock('../../../database/events/events.js');
import { postEvent } from '../../../database/events/events.js';

describe("addNewEvent tests", () => {
    let res = {};

    beforeEach( async () => {
        res = mockResponse();  
    });

    test('postEvent with mock to throw error', async () => {
        postEvent.mockImplementation(() => {
            throw new Error();
        });

        const result = await addNewEvent({}, res);
        expect(result).toBe(constants.ERROR);
    });

    test('postEvent with good data', async () => {
        const req = mockRequest({firstName: 'mat', secondName: 'naw', email: 'mat@gm.pl', date: '12-12-2021'});
        
        postEvent.mockReturnValue(constants.SUCCESS);

        const result = await addNewEvent(req, res);
        expect(result).toBe(constants.SUCCESS);
    });
})
