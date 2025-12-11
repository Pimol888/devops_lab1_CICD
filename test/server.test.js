import { expect } from 'chai';
import app from '../app.js';

describe('Server', () => {
  it('should export an Express app', () => {
    expect(app).to.exist;
    expect(typeof app.listen).to.equal('function');
  });
});