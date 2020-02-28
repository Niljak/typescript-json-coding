import { describe, it } from 'mocha';
import { expect } from 'chai';
import { hello } from '../index';

describe('testing main', () => {
  describe('testing hello function', () => {
    it('should return "hello world!', () => {
      expect(hello()).to.eq('hello world!');
    });
  });
});
