const fs = require('fs')
const path = require('path')

//./文件路径 会因文件执行位置为参考点寻找路径 应该用__dirname 来进行拼接以防执行文件路径 导致相对路径的错误, 路径拼接可以用+ 更建议实用path.join (可以用path.basename path.extname来获取文件名和扩展名)
//fs.readFile(__dirname +'/testScore.txt','utf-8',function(err,datastr){
fs.readFile(path.join(__dirname,'/testScore.txt'),'utf-8',function(err,datastr){
    if(err){
        console.log('file read error'+err.message)
    }
//console.log(datastr)
// 1成绩数据按空格分割
const arrOld = datastr.split(' ')
console.log(arrOld)
// 2循环数组 对数据进行字符串替换
const arrNew=[]
arrOld.forEach(item => {
    arrNew.push(item.replace('=',':'))
})
console.log(arrNew)
// 3把数组内的每一项合并
const newStr = arrNew.join('\n')
console.log (newStr)

fs.writeFile('./scoreok.txt', newStr, function (err) {
    if(err){
        console.log(err.message)
    }
})

console.log('socre updated')

})