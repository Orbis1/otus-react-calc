import { compilation, calculate } from './polishNotation';

const validation = (exp: string): boolean => {
  const args = exp.split(' ');

  const operands = args.filter(arg => arg.match(/\d+/));
  if (operands.length < 2) {
    console.log('Not enough operands: ' + operands.join(', '));
    return false;
  }

  const spaces: string[] = exp.match(/ /g);
  const elements: string[] = exp.match(/\d+|[+-/*//]/g);

  if (elements.length - spaces.length !== 1) {
    console.log(`Wrong format: ${spaces.length} spaces vs ${elements.length} characters`);
    return false;
  }

  return true;
}

const callback = (data: string): void => {
  const expression: string = data.toString().replace(/\r\n|\n/, '');
  
  if (expression == 'exit') {
    process.exit();
  }
  
  if (!validation(expression)) {
    return;
  }

  const RPN: string = compilation(expression);
  const answer = calculate(RPN);

  console.log(`> ${answer}`);
}

export { callback, validation };
