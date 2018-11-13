// 使用express模块

var express = require("express");
var server = express();
 
// 指定静态资源访问目录
server.use(express.static("static"));
 
server.listen(8002, "127.0.0.1");
console.log("Server running at http://%s:%s", 8002, "127.0.0.1");
