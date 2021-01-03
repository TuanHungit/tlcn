import request from 'supertest';
import { app } from '../../../app';

it('fails when the emails does not exists!', async () => {
  await request(app)
    .post('/api/v1/users/signin')
    .send({
      email: 'test1@gmail.com',
      password: '12345',
    })
    .expect(400);
});
it('fails when the password does not correct!', async () => {
  await request(app)
    .post('/api/v1/users/signup')
    .send({
      name: 'hung',
      email: 'test1@gmail.com',
      password: '12345',
    })
    .expect(201);
  await request(app)
    .post('/api/v1/users/signin')
    .send({
      email: 'test1@gmail.com',
      password: '12534534',
    })
    .expect(400);
});
it('response with a cookie when given valid credentials', async () => {
  await request(app)
    .post('/api/v1/users/signup')
    .send({
      name: 'hung',
      email: 'test1@gmail.com',
      password: '12345',
    })
    .expect(201);
  const response = await request(app)
    .post('/api/v1/users/signin')
    .send({
      email: 'test1@gmail.com',
      password: '12345',
    })
    .expect(201);
  expect(response.get('Set-Cookie')).toBeDefined();
});
