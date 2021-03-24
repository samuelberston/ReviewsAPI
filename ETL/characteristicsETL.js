const fs = require('fs');
const readLine = require('readline');

const validateCharacteristics = require('./validateCharacteristics');

const readStream = fs.createReadStream('/Users/samuelberston/Desktop/CSV/characteristics.csv', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('/Users/samuelberston/Desktop/CSV/characteristics-clean.csv');

const rl = readLine.createInterface({
  input: readStream,
  output: writeStream,
  console: false,
});

rl.on('line', (line) => {
  const validatedLine = validateCharacteristics(line);
  if (validatedLine) {
    rl.output.write(`${validatedLine}\n`);
  }
});
