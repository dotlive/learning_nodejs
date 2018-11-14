// 使用connect模块

var connect = require("connect");
var serveStatic = require("serve-static");
var app = connect();

// 指定静态资源访问目录
app.use(serveStatic("../static"));

var server = app.listen(8003, "127.0.0.1", function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server running at http://%s:%s", host, port);
});
