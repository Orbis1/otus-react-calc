import { multiplication, division, addition, subtraction } from "./operations";

describe('multiplication', () => {
  it('2 * 2', () => {
    expect(multiplication([2, 2])).toBe(4);
  });
  it('2 * -2', () => {
    expect(multiplication([2, -2])).toBe(-4);
  });
  it('-2 * 4', () => {
    expect(multiplication([-2, 4])).toBe(-8);
  });
  it('-2 * 4 * -1', () => {
    expect(multiplication([-2, 4, -1])).toBe(8);
  });
});

describe('division', () => {
  it('2 / 2', () => {
    expect(division([2, 2])).toBe(1);
  });
  it('2 / -2', () => {
    expect(division([2, -2])).toBe(-1);
  });
  it('-4 / 2', () => {
    expect(division([-4, 2])).toBe(-2);
  });
  it('-4 / 2 / -1', () => {
    expect(division([-4, 2, -1])).toBe(2);
  });
});

describe('addition', () => {
  it('2 + 2', () => {
    expect(addition([2, 2])).toBe(4);
  });
});

describe('subtraction', () => {
  it('2 - 2', () => {
    expect(subtraction([2, 2])).toBe(0);
  });
  it('2 - 2 - 2', () => {
    expect(subtraction([2, 2, 2])).toBe(-2);
  });
});