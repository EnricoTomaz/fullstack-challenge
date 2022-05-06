import request from 'supertest';
import Server from '../server';

describe('Api Testing', () => {
  it('creating professional', async () => {
    await request(Server)
      .post('/api/v1/')
      .send({
        name: 'Dante poet',
        professionalTypeId: 2,
        situation: true,
        phone: 77777,
        email: 'email@mail.com',
      })
      .expect(200);
  });

  it('geting a professional', async () => {
    await request(Server).get('/api/v1/17').expect(200);
  });
});
