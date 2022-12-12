const http = require ('http')
const fs = require ('fs')
const path = require('path')
// create a web server
const server = http.createServer()
// listen request
server.on('request', (req,res) =>{
    //get request url
    const url = req.url
    const fpath = path.join(__dirname, url)
    //maping url to file path
    //read file contents with path
    fs.readFile(fpath,'utf-8', (err,datastr) =>{
        if(err) return res.end('404 not found')
        //respond the contents to request
        res.setHeader('Content-Type', 'text/html; charset=utf8') 
        res.end(datastr)
    })
})
// start server
server.listen(80, ()=> {
    console.log('server runing at localhost')
})