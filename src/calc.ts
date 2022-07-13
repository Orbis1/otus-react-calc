enum exType {
  Number = "Number",
  Operator = "Operator",
  Unknown = "Unknown"
}

type Command = {
  value: number | string;
  type: string
};

const addTypes = (array: string[]): Command[] => {
  const withTypes = array.map(elem => {

    let value: number | string = elem;
    let type: string;

    if (/^\d+$/.test(elem)) {
      value = Number(elem);
      type = 'Number';
    } else if (/^[+-/*]$/.test(elem)) {
      type = 'Operator';
    } else {
      type = 'Unknown';
    }
 
    return { value, type };
  });

  return withTypes;
};

const callback = (data: string): void => {
  const expression: string = data.toString().replace(/\r\n|\n/, '');

  if (expression == 'exit') {
    process.exit();
  }

  const args: string[] = expression.split(' ');
  const argsTypes: Command[] = addTypes(args);

  const wrongTypes: Command[] = argsTypes.filter(({type}) => !['Number', 'Operator'].includes(type));

  if (wrongTypes.length > 0) {
    console.log('Wrong format:', wrongTypes);
  } else {
    console.log(`> ${eval(args.join(''))}`);
  }
}

const group = (args: Command[]): Command[][] => {
  const result = [];
  let acc = []
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg.type === 'Operator') {
      switch (arg.value) {
        case '+':
          result.push(acc);
          acc = []
          break;
        case '-':
          result.push(acc);
          acc = [arg]
          break;
        default:
          acc.push(arg);
          break;
      }
    } else if (arg.type === 'Number') {
      acc.push(arg)
    }
  }

  if (acc.length > 0) result.push(acc);

  return result;
}

export { addTypes , callback, group, Command };
