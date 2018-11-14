// 使用http模块

var http = require("http");
var url = require("url");
var fs = require("fs");
var path = require("path");
var mime = require("./mime").types;

var server = http.createServer(function(req, res) {
    var pathname = url.parse(req.url).pathname;
    // 指定静态资源访问目录
    var realpath = "../static" + pathname;
    fs.exists(realpath, function(exists) {
        if (!exists) {
            res.writeHead("404", {"content-type":"text/plain"});
            res.write("404, not found!");
            res.end();
        } else {
            fs.readFile(realpath, function(err, data){
                if (err) {
                    res.writeHead(500, {"content-type":"text/plain"});
                    res.end(err);
                } else {
                    var ext = path.extname(realpath);
                    var contenttype = mime[ext] || "text/plain";
                    res.writeHead(200, {"content-type":contenttype});
                    res.write(data);
                    res.end();
                }
            });
        }
    });
});

server.listen(8000, "127.0.0.1", function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server running at http://%s:%s", host, port);
});
