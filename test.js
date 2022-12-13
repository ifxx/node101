const TIME = require ("./dateformat")

const dt = new Date()
console.log(dt)
const newdt= TIME.dateFormat(dt)
console.log(newdt)
console.log(TIME)