var http = require('http');

var handleRequest = function(request, response) {
  console.log('Am primit un request URL ' + request.url);
  response.writeHead(200);
  response.end('Hello World! It first Image.');
};
var www = http.createServer(handleRequest);
www.listen(8080);
