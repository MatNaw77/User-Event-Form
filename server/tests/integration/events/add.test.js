const request = require("supertest");
import { constants } from '../../../constants/constants.js';
import { startServer } from '../../../setupServer.js'

describe('POST/api/event', () => {
    let server;
    let event = {
        firstName: 'mat',
        secondName: 'naw',
        email: 'mat@gm.pl',
        date: '12-12-2021'
    };

    beforeAll( async () => {
        server = await startServer(4000);
    });

    it('Should respond with 200 status', async () => {
        const response = await request(server).post('/api/event').send(event);
        const expectedResult = { 'msg': constants.SUCCESS };

        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject(expectedResult);
    });

    it('Should respond with 500 status and wrong email message', async () => {
        let eventData = { ...event};
        eventData.email = "matgmail.com"
        const response = await request(server).post('/api/event').send(eventData);
        const expectedResult = { 'msg': constants.EMAIL_ERROR };
        
        expect(response.statusCode).toBe(500);
        expect(response.body).toMatchObject(expectedResult);
    });

    it('Should respond with 500 status and wrong date message', async () => {
        let eventData = { ...event};
        eventData.date = '20123-12-12';
        const response = await request(server).post('/api/event').send(eventData);
        const expectedResult = { 'msg': constants.DATE_ERROR };
        
        expect(response.statusCode).toBe(500);
        expect(response.body).toMatchObject(expectedResult);
    });

    it('Should respond with 500 status and missing params', async () => {
        let eventData = { ...event};
        eventData.date = '';
        const response = await request(server).post('/api/event').send(eventData);
        const expectedResult = { 'msg': constants.PARAM_ERROR };
        
        expect(response.statusCode).toBe(500);
        expect(response.body).toMatchObject(expectedResult);
    });
})