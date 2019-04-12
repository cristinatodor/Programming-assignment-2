
var port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080;
var ip = process.env.OPENSHIFT_NODEJS_IP || process.env.IP || '127.0.0.1';

console.log('-----------');
console.log(ip);
console.log(port);

app = require("./app");
app.listen(port, ip)
