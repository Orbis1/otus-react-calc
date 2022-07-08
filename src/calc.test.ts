import { addTypes } from './calc';

describe('addTypes', () => {
  it('should return same array with types', () => {
    const array: string[] = ['a', '1', '+'];
    const result = addTypes(array);

    expect(result).toEqual([
      {value: 'a', type: 'Unknown'},
      {value: 1, type: 'Number'},
      {value: '+', type: 'Operator'},
    ])
    expect(result.length).toBe(array.length);
  })
});
