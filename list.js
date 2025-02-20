var http = require("http"); 
http.createServer(function (request, response) { 
// Send the HTTP header 
 // HTTP Status: 200 : OK 
 // Content Type: text/plain 
 response.writeHead(200, {'Content-Type': 'text/html'}); 
 // Send the response body as "Hello World" 
response.write("<ol type=A start=1><li>Apple<li>Banana<li>Grapes</ol>")
response.write("<table border=2><tr><th>Rollno</th><th>Name</th></tr></table>")
 response.end('Hello World\n'); 
}).listen(8081); 
// Console will print the message 
console.log('Server running at http://127.0.0.1:8081/');