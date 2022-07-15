import { compilation, calculate } from './polishNotation';

describe('Reverse Polish notation (RPN). compilation', () => {

  it('2 + 3', () => {
    expect(compilation('2 + 3')).toEqual('2 3 +');
  });

  it('1 + 2 / 3 - 4 * 6 - 10', () => {
    expect(compilation('1 + 2 / 3 - 4 * 6 - 10')).toEqual('1 2 3 / + 4 6 * - 10 -');
  });

  it('1 + 4 / 2 - 4 * 6 - 10', () => {
    expect(compilation('1 + 4 / 2 - 4 * 6 - 10')).toEqual('1 4 2 / + 4 6 * - 10 -');
  });

});

describe('RPN. calculation', () => {

  it('2 + 3', () => {
    expect(calculate('2 3 +')).toEqual(5);
  });

  it('1 + 4 / 2 - 4 * 6 - 10', () => {
    expect(calculate('1 4 2 / + 4 6 * - 10 -')).toEqual(-31);
  });

});