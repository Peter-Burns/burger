var mysql = require('mysql');

var connection = mysql.createConnection({
  port: 3306,
  host: 'hngomrlb3vfq3jcr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: '	bdsx4cl2lt8x9lht',
  password: '	yqtpplqzkury2pac',
  database: 'burgers_db'
});

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;