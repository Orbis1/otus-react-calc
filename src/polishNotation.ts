import { multiplication, division, addition, subtraction } from './operations';

const compilation = (args: string): string => {
  let stack: string[] = [];
  const output: string[] = [];

  const priority = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
  };

  args.split(' ').forEach(arg => {
    if (/\d+/.test(arg)) {
      output.push(arg);
    } else if (priority[arg] !== undefined) {
      const currentPriority = priority[arg];

      const higher = stack.filter(operator => priority[operator] >= currentPriority);
      const lower = stack.filter(operator => priority[operator] < currentPriority);

      if (higher.length > 0) {
        output.push(...higher.reverse());
      }
      stack = [...lower];
      stack.push(arg)
    }
  });
  return output.concat(stack.reverse()).join(' ');
}

const operations = {
  '+': addition,
  '-': subtraction,
  '*': multiplication,
  '/': division
}

const calculate = (exp: string): number => {
  const args: string[] = exp.split(' ');
  let stack: number[] = [];
  let removed: number[] = [];

  args.forEach(arg => {

    switch (true) {
      case /\d+/.test(arg):
        stack.push(Number(arg))
        break;
      case operations[arg] !== undefined:
        const operation = operations[arg];
        removed = stack.splice(-2);
        stack.push(operation(removed));
        break;
      default:
        break;
    }
  })
  return stack[0];
} 

export { compilation, calculate };