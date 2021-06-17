var http = require('http');
var startTime;
var host;
var handleRequest = function(request, response) {
  response.setHeader('Content-Type', 'text/plain');
  response.writeHead(200);
  response.write("Hello World , este versiunea II! | Ruleaza pe :");
  response.write(host);
  response.end(" v=2\n");
  console.log("Running On:" , host);
}
var www = http.createServer(handleRequest);
www.listen(8080,function () {
    host = process.env.HOSTNAME;
});
