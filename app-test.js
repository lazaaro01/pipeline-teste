const supertest = require('supertest');
const app = require('./app');

describe('GET /', () => {
    it('responder com um texto de confirmação', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('API está funcionando!');
    });
});