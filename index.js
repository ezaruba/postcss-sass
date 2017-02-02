var gonzales = require('gonzales-pe');
var fs = require('fs');

process.argv.forEach(function (val, index, array) {
  if (index > 1) {
    fs.readFile('./' + val, 'utf8', function (err, data) {
      if (err) {
        return console.log(err);
      }
      // Parse Sass file, and get Sass AST
      var sassAST = (gonzales.parse(data, {syntax: 'sass'}));
      console.log(sassAST);
    });
  }
});
