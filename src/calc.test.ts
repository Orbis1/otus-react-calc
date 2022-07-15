import { callback, validation } from './calc';

describe('callback', () => {
  it('should print correct answer to console', () => {
    const exps = [
      { exp: '2 + 3', result: '5' },
      { exp: '2 - 3', result: '-1' },
      { exp: '2 * 3', result: '6' },
      { exp: '6 / 3', result: '2' },
    ] ;

    const log = jest.spyOn(console, 'log').mockImplementation(() => {});

    exps.forEach(({ exp, result }) => {
      callback(exp);
    })
    
    expect(log.mock.calls.length).toBe(exps.length);
    const answers = exps.map(({ result }) => ['> ' + result])
    expect(log.mock.calls).toEqual(answers);
  })
});

describe('validation', () => {
  it('should validate input', () => {
    const exps = [
      { exp: '2 + 3 +4', result: false },
      { exp: '- 3', result: false },
      { exp: '2 * 3', result: true },
      { exp: '1 + 2 / 3 - 4 * 6 - 10', result: true },
    ] ;
    console.log = jest.fn();

    exps.forEach(({ exp, result }) => {
      expect(validation(exp)).toBe(result);
    })
  })
});