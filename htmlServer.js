const http = require ('http')
const server = http.createServer()

server.on('request', (req,res) => {
//获取请求的URL
    const url = req.url
//设置默认相应内容为404
    let content = '<h1>404 not found!</h1>'
//判断用户请求路径
    if (url === '/' || url === '/index.html'){
        content = '<h1>home page</h1>'
    } else if (url === '/about.html'){
        content = '<h1>this is a good solution</h1>'
    }
//设置响应头防止乱码
res.setHeader('Content-Type', 'text/html; charset=utf8') 
res.end(content)  
})

server.listen(80, ()=> {
    console.log('server is running at 80')
})