import chai from 'chai';
import request from 'supertest';
import Server from '../../server/index';
const expect = chai.expect;

describe('Api Testing', () => {
  //post1
  it('Creating professional', async () => {
    await request(Server)
      .post('/')
      .send({
        name: 'Mr Postman',
        phone: '00000000',
        email: 'email2@mail.com',
        professionalTypeId: 2,
        situation: true,
      })
      .expect(201)
      .then((res) => {
        expect(res.body.name).to.be.a('string');
        expect(res.body.email).to.be.a('string');
      });
  });
});
