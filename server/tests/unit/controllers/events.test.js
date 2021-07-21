
import { addEvent } from '../../../controllers/events.js'
import { constants } from '../../../constants/constants.js';
jest.mock('../../../services/events.js');
import addNewEvent from '../../../services/events.js';

const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

const mockRequest = ({firstName, secondName, email, date}) => {
    return {
        body: {
            firstName: firstName,
            secondName: secondName,
            email: email,
            date: date
        }
    };
};

let res = {};

describe("setResponse tests", () => {

    beforeAll( async () => {
        res = mockResponse();  
    });

    test('postEvent with mocked function addNewEvent', async () => {
        const req = mockRequest({firstName: 'mat', secondName: 'naw', email: 'mat@gm.pl', date: '12-12-2021'});
        
        addNewEvent.mockReturnValueOnce(constants.SUCCESS)
        await addEvent(req, res);

        expect(addNewEvent).toHaveBeenCalled();
        expect(res.status).not.toHaveBeenCalledWith(500);
        expect(res.status).toHaveBeenCalledWith(200);
    });

    test('postEvent with empty data', async () => {
        const req = mockRequest({firstName: '', secondName: '', email: '', date: ''});
        
        await addEvent(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
    });

});