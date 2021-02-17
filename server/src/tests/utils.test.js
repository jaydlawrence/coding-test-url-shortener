const {generateNewURLStub} = require('../utils');
describe('Test Util functions', () => {
  it('generateNewURLStub should return a 6 character stub by default', () => {
    const newStub = generateNewURLStub()
    expect(newStub).toHaveLength(6);
  });
  it('generateNewURLStub should return a character stub of length provided', () => {
    const length = 10;
    const newStub = generateNewURLStub(length)
    expect(newStub).toHaveLength(length);
  });
});