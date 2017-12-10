var path = require('path');
var express = require("express");
var app = express();
var fs = require('fs');
var toBeWritten = 'Hello World!';
var util = require('util');
var currentdate = new Date();
var datetime = currentdate.getDate() + "/"+(currentdate.getMonth()+1)
    + "/" + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":" + currentdate.getSeconds();

app.use(express.static(path.join(__dirname, 'public')));
app.get("/", function(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<html><body><h1>Welcome to the Home Page</h1></body></html>");
});
app.get("/about", function(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Welcome to the about page!");
});
app.get("*", function(req, res) {
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("The page does not exist!");
});
var server = app.listen(8000, function () {
  console.log("Node server is running.. ");
});
fs.writeFile('test.txt', datetime, function (err) {
  if (err)
     console.log(err);
  else
     console.log('Write operation complete.');
});
fs.readFile('Test.txt', function (err, data) {
  if (err) throw err;
  console.log(data);
});
