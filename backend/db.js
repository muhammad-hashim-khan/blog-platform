const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "hashim@2006",
    database: "blogplatform"
});

db.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("MySQL Connected");
    }
});

module.exports = db;