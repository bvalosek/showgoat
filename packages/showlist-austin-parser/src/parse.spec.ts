import { parse, getPartials } from './parse';

describe('parse', () => {

  it('should be a function', () => {
    expect(typeof parse).toBe('function');
  });

});

describe('getPartials', () => {

  it('should be a function', () => {
    expect(typeof getPartials).toBe('function');
  });

});
