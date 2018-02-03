var http = require("http");//引入http模块
var url = require("url");//引入url模块，用于解析请求url

function start(route, handle) {
    function onRequest(request, response) {   //请求响应函数（回调函数）
        var pathname = url.parse(request.url).pathname; //获取路径，如/start
        console.log("Request for " + pathname + " received.");//输出，如Request for /start received.
        route(handle, pathname, response, request);//调用路由函数，传递处理数组、路径和请求、响应对象参数
    }

    http.createServer(onRequest).listen(8888);//建立服务器，并监听8888端口
    console.log("Server has started.");
}

exports.start = start;//该模块staat方法共享出去。