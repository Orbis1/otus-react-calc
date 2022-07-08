const greet = `
Weclome to console-calc!
Type your expression (all numbers and operator must have " " as delimiter).
For exit press ctrl + C or type exit.
`
console.log(greet);

const addTypes = (array) => {
  const withTypes = array.map(value => {
    let type;

    if (/^\d+$/.test(value)) {
      value = Number(value);
      type = 'Number';
    } else if (/^[+-/*]$/.test(value)) {
      type = 'Operator';
    }
 
    return { value, type };
  });

  return withTypes;
}

process.stdin.on('data', data => {
  const expression = data.toString().replace('\r\n', '');

  if (expression == 'exit') {
    process.exit();
  }

  const args = expression.split(' ');
  const argsTypes = addTypes(args);
  console.log(argsTypes);

  const wrongTypes = argsTypes.filter(({type}) => !['Number', 'Operator'].includes(type));

  if (wrongTypes.length > 0) {
    console.log('Wrong format:', wrongTypes);
  } else {
    console.log(`> ${eval(args.join(''))}`);
  }
});
