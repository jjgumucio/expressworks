var express = require('express'),
    crypto = require('crypto'),
    app = express();

app.put('/message/:id', function(req, res) {
  res.end(crypto.createHash('sha1')
            .update(new Date().toDateString() + req.params.id)
            .digest('hex'));

}).listen(process.argv[2]);
