// test/app.test.js
const request = require('supertest');
const app = require('../app'); 

const expect = require('chai').expect;

describe('Application Endpoints', () => {
  // Test 1/4
  it('GET / should return "Hello DevOps Lab!" with status 200', async () => {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
    expect(res.text).to.equal('Hello DevOps Lab!');
  });

  // Test 2/4
  it('GET /health should return status 200 and { status: "ok" }', async () => {
    const res = await request(app).get('/health');
    expect(res.status).to.equal(200);
    expect(res.body.status).to.equal('ok');
  });
  
  // You will need at least two more simple tests to meet the 4/4 passing requirement[cite: 49]. 
  // For example, add a test for a non-existent route, or a specific header.
  
  // Test 3/4 (Example of a 404 test)
  it('GET /invalid-route should return status 404', async () => {
    const res = await request(app).get('/invalid-route');
    expect(res.status).to.equal(404);
  });
  
  // Test 4/4 (Example of a specific header check)
  it('Root endpoint should return a text/html content type', async () => {
    const res = await request(app).get('/');
    expect(res.headers['content-type']).to.include('text/html');
  });

});