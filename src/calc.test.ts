import { addTypes, callback, group, Command } from './calc';

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


describe('callback', () => {
  it('should print correct answer to console', () => {
    const exps = [
      { exp: '2 + 3', result: '5' },
      { exp: '2 - 3', result: '-1' },
      { exp: '2 * 3', result: '6' },
      { exp: '6 / 3', result: '2' },
    ] ;
    console.log = jest.fn();

    exps.forEach(({ exp, result }) => {
      callback(exp);
    })
    
    // @ts-ignore
    expect(console.log.mock.calls.length).toBe(exps.length);
    const answers = exps.map(({ result }) => ['> ' + result])
    // @ts-ignore
    expect(console.log.mock.calls).toEqual(answers);
  })
});

describe('callback', () => {
  it('should print correct answer to console', () => {
    const exps = [
      { exp: '2 + 3', result: '5' },
      { exp: '2 - 3', result: '-1' },
      { exp: '2 * 3', result: '6' },
      { exp: '6 / 3', result: '2' },
    ] ;
    console.log = jest.fn();

    exps.forEach(({ exp, result }) => {
      callback(exp);
    })
    
    // @ts-ignore
    expect(console.log.mock.calls.length).toBe(exps.length);
    const answers = exps.map(({ result }) => ['> ' + result])
    // @ts-ignore
    expect(console.log.mock.calls).toEqual(answers);
  })
});

describe('group by operator', () => {
  it('2 + 2 * 2 -> [2][2*2]', () => {
    const exp: Command[] = [
      {value: 2, type: 'Number'},
      {value: '+', type: 'Operator'},
      {value: 2, type: 'Number'},
      {value: '*', type: 'Operator'},
      {value: 2, type: 'Number'},
    ];

    const res: Command[][] = [
      [
        {value: 2, type: 'Number'},
      ],
      [
        {value: 2, type: 'Number'},
        {value: '*', type: 'Operator'},
        {value: 2, type: 'Number'},
      ]
    ];

    expect(group(exp)).toEqual(res);
  })

  it('2 - 2 * 2 -> [2][-2*2]', () => {
    const exp: Command[] = [
      {value: 2, type: 'Number'},
      {value: '-', type: 'Operator'},
      {value: 2, type: 'Number'},
      {value: '*', type: 'Operator'},
      {value: 2, type: 'Number'},
    ];

    const res: Command[][] = [
      [
        {value: 2, type: 'Number'},
      ],
      [
        {value: '-', type: 'Operator'},
        {value: 2, type: 'Number'},
        {value: '*', type: 'Operator'},
        {value: 2, type: 'Number'},
      ]
    ];

    expect(group(exp)).toEqual(res);
  })

  it('2 / 2 + 2 -> [2/2][2]', () => {
    const exp: Command[] = [
      {value: 2, type: 'Number'},
      {value: '/', type: 'Operator'},
      {value: 2, type: 'Number'},
      {value: '+', type: 'Operator'},
      {value: 2, type: 'Number'},
    ];

    const res: Command[][] = [
      [
        {value: 2, type: 'Number'},
        {value: '/', type: 'Operator'},
        {value: 2, type: 'Number'},
      ],
      [
        {value: 2, type: 'Number'},
      ]
    ];

    expect(group(exp)).toEqual(res);
  })

  it('2 / 2 * 2 -> [2/2][*2]', () => {
    const exp: Command[] = [
      {value: 2, type: 'Number'},
      {value: '/', type: 'Operator'},
      {value: 2, type: 'Number'},
      {value: '*', type: 'Operator'},
      {value: 2, type: 'Number'},
    ];

    const res: Command[][] = [
      [
        {value: 2, type: 'Number'},
        {value: '/', type: 'Operator'},
        {value: 2, type: 'Number'},
      ],
      [
        {value: '*', type: 'Operator'},
        {value: 2, type: 'Number'},
      ]
    ];

    expect(group(exp)).toEqual(res);
  })

  it('2 / - 2 + 2 -> [2/-2][2]', () => {
    const exp: Command[] = [
      {value: 2, type: 'Number'},
      {value: '/', type: 'Operator'},
      {value: '-', type: 'Operator'},
      {value: 2, type: 'Number'},
      {value: '+', type: 'Operator'},
      {value: 2, type: 'Number'},
    ];

    const res: Command[][] = [
      [
        {value: 2, type: 'Number'},
        {value: '/', type: 'Operator'},
        {value: '-', type: 'Operator'},
        {value: 2, type: 'Number'},
      ],
      [
        {value: 2, type: 'Number'},
      ]
    ];

    expect(group(exp)).toEqual(res);
  })});