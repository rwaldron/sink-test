var fs = require('fs');
var exec = require('child_process').exec;

var headless = fs.readFileSync('src/headless.js');
var tests = fs.readFileSync('tests.js');
fs.writeFileSync('make/run.js', headless + tests);
exec('node make/run.js', function (err, out) {
  console.log(out);
  var fs = require('fs');
  fs.unlink('make/run.js');
});