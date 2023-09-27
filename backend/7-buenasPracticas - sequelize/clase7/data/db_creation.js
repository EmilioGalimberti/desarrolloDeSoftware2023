import * as sqlite3 from 'sqlite3'

const db = new sqlite3.default.Database("./DB0509.db",
sqlite3.OPEN_READWRITE,
(err) => {
    if(err) return console.log(err.message)
})

const sql = "CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY, firstname, lastname, email)"

db.run(sql)