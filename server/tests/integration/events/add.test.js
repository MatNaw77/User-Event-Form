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

    describe('should be successful', () => {
        it('should respond with 200 status', async () => {
            const response = await request(server).post('/api/event').send(event);
            const expectedResult = { 'msg': constants.SUCCESS };

            expect(response.statusCode).toBe(200);
            expect(response.body).toMatchObject(expectedResult);
        });

        it('should respond with 200 status', async () => {
            event.email = 'matgmailpl';
            const response = await request(server).post('/api/event').send(event);
            const expectedResult = { 'msg': constants.PARAM_ERROR };
            
            expect(response.statusCode).toBe(500);
            expect(response.body).toMatchObject(expectedResult);yield
        });
    

    })

    describe("should fail", () => {

        

    })
    

})