var express = require('express');
var app = express();
var path = require("path");
var fs = require("fs");



app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(___dirname + '/index.html'));
});


app.get('/products', function (req, res) {
  console.log("Calling rest api");
  var products = [{ Name: 'Cellphones', price: '70000', Quantity: 40 },
  { Name: 'Laptop', price: '90000', Quantity: 50 }];
  res.send(products);
});


var server = app.listen(8000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:8000", host, port)
})