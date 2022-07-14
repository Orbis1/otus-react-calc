const multiplication = (args:number[]): number => args.reduce((acc, val) => acc *= val);
const division = (args:number[]): number => args.reduce((acc, val) => acc /= val);
const addition = (args:number[]): number => args.reduce((acc, val) => acc += val);
const subtraction = (args:number[]): number => args.reduce((acc, val) => acc -= val);

export { multiplication, division, addition, subtraction };