var express = require('express'),
    app = express();

app.get('/search', function(req, res) {
  res.send(req.query);
}).listen(process.argv[2]);

