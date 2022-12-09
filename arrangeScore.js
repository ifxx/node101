const fs = require('fs')
fs.readFile('./testScore.txt','utf-8',function(err,datastr){
    if(err){
        console.log('file read error'+err.message)
    }
console.log(datastr)
})
