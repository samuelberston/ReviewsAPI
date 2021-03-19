const fs = require('fs');
const readLine = require('readline');

const validatePhotos = require('./validatePhotos.js');

const readStream = fs.createReadStream('/Users/samuelberston/Desktop/CSV/reviewsPhotos.csv', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('/Users/samuelberston/Desktop/CSV/reviewsPhotos-clean.csv');

const rl = readLine.createInterface({
  input: readStream,
  output: writeStream,
  console: false,
});

rl.on('line', (line) => {
  const validatedLine = validatePhotos(line);
  if (validatedLine) {
    rl.output.write(`${validatedLine}\n`);
  }
});
