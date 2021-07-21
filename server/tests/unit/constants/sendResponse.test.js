import sendResponse from '../../../constants/sendResponse.js';
import { constants } from '../../../constants/constants.js';

const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

let res = {};

describe("setResponse tests", () => {

    beforeAll( async () => {
        res = mockResponse();
    });

    test('postEvent without payload', async () => {
        await sendResponse(res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalled();
    });

    test('postEvent with not existing status', async () => {
        await sendResponse(res, 'random');
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalled();
    });

    test('postEvent with succcess', async () => {
        await sendResponse(res, constants.SUCCESS);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalled();
    });

    test('postEvent with error', async () => {
        await sendResponse(res, constants.ERROR);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalled();
    });

    test('postEvent with error', async () => {
        await sendResponse(res, constants.PARAM_ERROR);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalled();
    });

});