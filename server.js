var express = require('express');
var t = require('./timestamp');

  app = express(),
  port = process.env.PORT || 3000;
  app.listen(port);
  app.get(['/api/timestamp', '/api/timestamp/:date_string'], (req, res) => {
    res.json(t.timeStamp(req.params.date_string));
  });
