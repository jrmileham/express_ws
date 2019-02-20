const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// const's create the regular HTTP request and response
app.get('/', function(req, res) {
  console.log('Get index');
  fs.createReadStream('./index.html')
  .pipe(res);
});

app.post('/', function(req, res) {
  const message = req.body.message;
  console.log('Regular POST message: ', message);
  return res.json({
    answer: 42
  });
});

module.exports = app;