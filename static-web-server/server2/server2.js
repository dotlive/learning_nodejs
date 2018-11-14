// 使用express模块

var express = require("express");
var app = express();
 
// 指定etag
app.set("etag", "weak");
// 指定静态资源访问目录
app.use(express.static("../static"));
 
var server = app.listen(8002, "127.0.0.1", function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server running at http://%s:%s", host, port);
});
