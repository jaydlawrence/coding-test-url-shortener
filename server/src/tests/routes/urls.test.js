const supertest = require('supertest');
const http = require('http');
const app = require('../../../app');

const TEST_LONG_URL = 'this is a test URL';

describe('URL Endpoints', () => {
  let server;
  let request;
  let newId;

  beforeAll((done) => {
    server = http.createServer(app);
    server.listen(done);
    request = supertest(server);
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should create a new short URL stub', async () => {
    const result = await request
      .post('/urls')
      .send({
        url: TEST_LONG_URL,
      })
      .expect(200);
    expect(result.body.url).toEqual(TEST_LONG_URL);
    expect(result.body.id).toHaveLength(6);
    newId = result.body.id;
  })

  it('should fetch long URL by stub', async () => {
    const result = await request
      .get(`/urls?id=${newId}`)
      .expect(200);
    expect(result.body.url).toEqual(TEST_LONG_URL);
    expect(result.body.id).toEqual(newId);
  })
})