var server = require("./server");//引入代码模块 服务器
var router = require("./router");//引入代码模块 路由
var requestHandlers = require("./requestHandlers");//引入代码模块 请求处理

var handle = {}//构建健值对，每个值是一个处理函数
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route, handle);//调用服务器模块start函数，两个参数，一个路由函数、一个handle数组