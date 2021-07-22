
import { addEvent } from '../../../controllers/events.js'
import { constants } from '../../../constants/constants.js';
import { mockRequest, mockResponse } from '../../reqResMocks.js';

jest.mock('../../../services/events.js');
import addNewEvent from '../../../services/events.js';

describe("Function addEvent", () => {
    let res = {};
    let event = {
        firstName: 'mat',
        secondName: 'naw',
        email: 'mat@gm.pl',
        date: '12-12-2021'
    }
    
    beforeEach(() => {
        res = mockResponse();
    });

    it('Should return status 500 with postEvent without data in argument', async () => {
        let emptyEvent = {
            firstName: '',
            secondName: '',
            email: '',
            date: ''
        };
        
        const req = mockRequest(emptyEvent);
        
        await addEvent(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
    });

    it('Should return status 200 with mocked function addNewEvent returning SUCCESS', async () => {
        const req = mockRequest(event);

        addNewEvent.mockReturnValueOnce(constants.SUCCESS)
        await addEvent(req, res);

        expect(addNewEvent).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(200);
    });

    it('Should return status 500 with mocked function addNewEvent returning ERROR', async () => {
        const req = mockRequest(event);

        addNewEvent.mockReturnValueOnce(constants.ERROR);
        await addEvent(req, res);

        expect(addNewEvent).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(500);
    });

    it('Should respond with 500 due to wrong date', async () => {
        let eventData = { ...event};
        eventData.date = '20123-12-12';
        const req = mockRequest(event);

        await addEvent(req, res);

        expect(addNewEvent).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(500);   
    });

    it('Should respond with 500 due to wrong email', async () => {
        let eventData = { ...event};
        eventData.email = 'matgmailcom';
        const req = mockRequest(event);

        await addEvent(req, res);

        expect(addNewEvent).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(500);   
    });
});