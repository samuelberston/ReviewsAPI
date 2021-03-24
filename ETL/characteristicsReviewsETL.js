const fs = require('fs');
const readLine = require('readline');

const validateCharacteristicsReviews = require('./validateCharacteristicsReviews');

const readStream = fs.createReadStream('/Users/samuelberston/Desktop/CSV/characteristicsReviews.csv', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('/Users/samuelberston/Desktop/CSV/characteristicsReviews-clean.csv');

const rl = readLine.createInterface({
  input: readStream,
  output: writeStream,
  console: false,
});

rl.on('line', (line) => {
  const validatedLine = validateCharacteristicsReviews(line);
  if (validatedLine) {
    rl.output.write(`${validatedLine}\n`);
  }
});
