const fs = require('fs')
fs.readFile('./testScore.txt','utf-8',function(err,datastr){
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
})
