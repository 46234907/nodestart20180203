function route(handle, pathname, response, request) {
    console.log("About to route a request for " + pathname);//例如Request handler 'start' was called.
    if (typeof handle[pathname] === 'function') {//如果处理数组键对应值为函数，则调用处理函数
        handle[pathname](response, request);//对应处理函数，并传递response, request对象
    } else {//如果找不到 handle[pathname] ，则报404错误
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;//该模块route方法共享出去。