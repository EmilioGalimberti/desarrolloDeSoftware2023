const fs = require("fs")
const path = require("path")

const logPath = path.join(__dirname, '../userLogs.txt')

function userLog(req, res, next){
    fs.appendFileSync( logPath ,'El usuario ingreso en: ' + req.URL + " " +"\n")

    next()
}

module.exports = userLog;