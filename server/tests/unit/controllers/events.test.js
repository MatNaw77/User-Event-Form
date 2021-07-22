
import { addEvent } from '../../../controllers/events.js'
import { constants } from '../../../constants/constants.js';
import { mockRequest, mockResponse } from '../../reqResMocks.js';

jest.mock('../../../services/events.js');
import addNewEvent from '../../../services/events.js';

describe("addEvent tests", () => {
    let mockRequestData = {
        firstName: 'mat',
        secondName: 'naw',
        email: 'mat@gm.pl',
        date: '12-12-2021'
    }
    let res = {};


    
    beforeEach(() => res = mockResponse());

    test('postEvent with empty data', async () => {
        let emptyMockRequestData = {
            firstName: '',
            secondName: '',
            email: '',
            date: ''
        };
        
        const req = mockRequest(emptyMockRequestData);
        
        await addEvent(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
    });

    test('postEvent with mocked function addNewEvent returning SUCCESS', async () => {
        const req = mockRequest(mockRequestData);
        
        addNewEvent.mockReturnValueOnce(constants.SUCCESS)
        await addEvent(req, res);

        expect(addNewEvent).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(200);
    });

    test('postEvent with mocked function addNewEvent returning ERROR', async () => {
        const req = mockRequest(mockRequestData);

        addNewEvent.mockReturnValueOnce(constants.ERROR);
        await addEvent(req, res);

        expect(addNewEvent).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(500);
    });

    test('postEvent with mocked function addNewEvent returning ERROR', async () => {
        const req = mockRequest(mockRequestData);

    
        addNewEvent.mockReturnValueOnce(constants.ERROR);
        await addEvent(req, res);

        expect(addNewEvent).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(500);
    });
});