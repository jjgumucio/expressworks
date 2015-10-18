var express = require('express'),
    fs = require('fs'),
    app = express();

app.get('/books', function(req, res) {
  fs.readFile(process.argv[3], function(err, data) {
    if ( err ) {
      return console.error(err);
    }

    return res.json(JSON.parse(data));
  });

}).listen(process.argv[2]);
