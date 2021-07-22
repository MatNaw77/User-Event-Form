import sendResponse from '../../../constants/sendResponse.js';
import { constants } from '../../../constants/constants.js';
import { mockResponse } from '../../reqResMocks.js';

describe('Function setResponse', () => {
    let res = {};

    beforeAll(() => {
        res = mockResponse();
    });

    it('Should return status 200 when calling with sucess status', async () => {
        await sendResponse(res, constants.SUCCESS);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalled();
    });

    it('Should return error 500 when no payload', async () => {
        await sendResponse(res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalled();
    });

    it('Should return error 500 when calling with not existing status', async () => {
        await sendResponse(res, 'missed');
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalled();
    });

    it('Should return error 500 when calling with error status', async () => {
        await sendResponse(res, constants.ERROR);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalled();
    });
});