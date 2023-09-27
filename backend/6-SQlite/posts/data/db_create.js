import * as sqlite3 from "sqlite3";

const db = new sqlite3.default.Database("./posts.db",sqlite3.OPEN_READWRITE, (err)=>{
    if (err) return console.error(err.message);
  })
  