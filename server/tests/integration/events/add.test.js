import { app } from '../../../setupServer.js'
var request = require("supertest");

describe('POST/api/events/add', () => {

    
    describe('should be successful', () => {
        
        
        test('should respond with 200 status', async () => {
            const response = await request(app).post('/events/add').send({
                firstName: 'mat', 
                secondName: 'naw', 
                email: 'mat@gm.pl', 
                date: '12-12-2021'
            });
            expect(response.statusCode).toBe(200)
        });
    

    })

    describe("should fail", () => {

        

    })
    

})