// 使用connect模块

var connect = require("connect");
var serveStatic = require("serve-static");
var server = connect();

// 指定静态资源访问目录
server.use(serveStatic("static"));

server.listen(8003, "127.0.0.1");
console.log("Server running at http://%s:%s", 8003, "127.0.0.1");
