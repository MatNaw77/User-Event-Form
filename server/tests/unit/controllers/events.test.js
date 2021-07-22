
import { addEvent } from '../../../controllers/events.js'
import { constants } from '../../../constants/constants.js';
jest.mock('../../../services/events.js');
import addNewEvent from '../../../services/events.js';
jest.mock('express-validator');
import { validationResult } from 'express-validator';
import { mockRequest, mockResponse } from '../../reqResMocks.js';

let res = {};

describe("addEvent tests", () => {

    beforeAll( async () => {
        res = mockResponse();  
        validationResult.mockReturnValue({});
    });

    test('postEvent with empty data', async () => {
        const req = mockRequest({firstName: '', secondName: '', email: '', date: ''});
        
        await addEvent(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
    });

    test('postEvent with mocked function addNewEvent returning SUCCESS', async () => {
        const req = mockRequest({firstName: 'mat', secondName: 'naw', email: 'mat@gm.pl', date: '12-12-2021'});
        
        addNewEvent.mockReturnValueOnce(constants.SUCCESS)
        await addEvent(req, res);

        expect(addNewEvent).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(200);
    });

    test('postEvent with mocked function addNewEvent returning ERROR', async () => {
        const req = mockRequest({firstName: 'mat', secondName: 'naw', email: 'mat@gm.pl', date: '12-12-2021'});

        addNewEvent.mockReturnValueOnce(constants.ERROR);
        await addEvent(req, res);

        expect(addNewEvent).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(500);
    });

    test('postEvent with mocked function addNewEvent returning ERROR', async () => {
        const req = mockRequest({firstName: 'mat', secondName: 'naw', email: 'mat@gm.pl', date: '12-12-2021'});

        validationResult.mockReturnValueOnce({mock: '1'});
        addNewEvent.mockReturnValueOnce(constants.ERROR);
        await addEvent(req, res);

        expect(addNewEvent).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(500);
    });
});