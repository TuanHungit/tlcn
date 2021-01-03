import request from 'supertest';
import { app } from '../../../app';
it('clears cookie after sign out', async () => {
  await request(app)
    .post('/api/v1/users/signup')
    .send({
      name: 'hung',
      email: 'test@test.com',
      password: '12345',
    })
    .expect(201);
  const response = await request(app)
    .get('/api/v1/users/signout')
    .send({})
    .expect(200);

  expect(response.get('Set-Cookie')[0]).toContain(`jwt=loggedout`);
});
