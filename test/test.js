import request from 'supertest';
import { expect } from 'chai';
import app from '../app.js';
import { MESSAGES } from '../constants.js';

describe('Application Endpoints', () => {
  describe('GET /', () => {
    it('should return the correct greeting message', async () => {
      const res = await request(app).get('/');
      expect(res.status).to.equal(200);
      expect(res.text).to.equal(MESSAGES.GREETING);
    });
  });

  describe('GET /health', () => {
    it('should return health status', async () => {
      const res = await request(app).get('/health');
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property('status', 'OK');
      expect(res.body).to.have.property('timestamp');
      expect(res.body).to.have.property('uptime');
    });
  });

  describe('GET /api/info', () => {
    it('should return API information', async () => {
      const res = await request(app).get('/api/info');
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property('name', 'CI/CD Lab App');
      expect(res.body).to.have.property('version', '1.0.0');
    });
  });
});