var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.listen(3000, function() {
  console.log("listening 3000 Go Green Electric");
});
 