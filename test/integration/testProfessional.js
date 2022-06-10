import chai from 'chai';
import request from 'supertest';
import Server from '../../server/index';
const expect = chai.expect;

let id;
describe('Api Testing', () => {
  //post1
  it('Creating professional', async () => {
    await request(Server)
      .post('/api/v1/')
      .send({
        name: 'Mr Postman',
        phone: '00000000',
        email: 'email2@mail.com',
        professionalTypeId: 2,
        situation: true,
      })
      .expect(201)
      .then((res) => {
        console.log(res.body);
        id = res.body.id;
      });
  });
  it('Get all professionals', async () => {
    await request(Server)
      .get('/api/v1/')
      .expect(200)
      .then((res) => {
        console.log(res.body);
      });
  });
  it('Get a professional', async () => {
    await request(Server)
      .get(`/api/v1/${id}`)
      .expect(200)
      .then((res) => {
        console.log(res.body);
      });
  });
  it('Editing professional', async () => {
    await request(Server)
      .put(`/api/v1/${id}`)
      .send({
        name: 'Mr Postman2',
        phone: '000000002',
        email: 'email2@mail.com',
        professionalTypeId: 2,
        situation: true,
      })
      .expect(200)
      .then((res) => {
        console.log(res.body);
      });
  });
  it('delete professional', async () => {
    await request(Server)
      .delete(`/api/v1/${id}`)
      .expect(200)
      .then((res) => {
        console.log(res.body);
      });
  });
});
