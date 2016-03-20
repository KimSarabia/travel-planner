'use strict';

var mysql = require("mysql");

var connection = mysql.createConnection(process.env.JAWSDB_URL || {
    host: "localhost",
    user: "root",
    password: "test",
    database: "activities"
});


"mysql://tzep3bvpsplngeiv:t1sm4puaww5hrjwd@izm96dhhnwr2ieg0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/qxayptk5yjgb7vj3"
"mysql://user:password@host/database"


connection.connect(function(err){
if(err){
  console.log('Error:', err);
}
else{
  console.log('Connection success!');
}
});

module.exports = connection;
