const fs = require('fs');
const path = require('path');
const globby = require('globby');
const Spritesmith = require('spritesmith');

const images = globby.sync(['./src/**/*.*']);

console.log(images);

// Generate our spritesheet
Spritesmith.run({
  src: images,
}, function (err, result) {
  if (err) throw err;
  // Output the image
  fs.writeFileSync(path.resolve('dist', 'padding.png'), result.image);
  console.log(result.coordinates);
  console.log(result.properties); // Coordinates and properties
});
