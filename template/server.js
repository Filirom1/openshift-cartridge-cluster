var net = require('net');
var http = require('http');
var dns = require('dns');
var os = require('os');

var ip;
dns.resolve4(os.hostname(), function(err, ips){
  ip = ips[0];
});

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(JSON.stringify(process.env));
}).listen(process.env.OPENSHIFT_NODEJS_PORT, process.env.OPENSHIFT_NODEJS_IP);

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(JSON.stringify(process.env));
}).listen(process.env.OPENSHIFT_NODEJS_CLUSTER_PORT, process.env.OPENSHIFT_NODEJS_IP);
