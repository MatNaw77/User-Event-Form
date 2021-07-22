import sendResponse from '../../../constants/sendResponse.js';
import { constants } from '../../../constants/constants.js';
import { mockResponse } from '../../reqResMocks.js';

let res = {};

describe('Function setResponse', () => {
    beforeAll( async () => {
        res = mockResponse();
    });

    test('Should return error 500 when no payload', async () => {
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