import request from 'supertest';
import Server from '../server';

describe('Api Testing', () => {
  let profId = '';

  before(function (done) {
    request(Server)
      .post('/api/v1/')
      .send({
        name: 'Dante poet',
        professionalTypeId: 2,
        situation: true,
        phone: 77777,
        email: 'email@mail.com',
      })
      .end(function (err, res) {
        console.log(res.body);
        profId = res.body.user.parentMember.id;
        done();
      });
  });

  it('geting a professional', async () => {
    await request(Server).get('/api/v1/17').expect(200).done();
  });
});
