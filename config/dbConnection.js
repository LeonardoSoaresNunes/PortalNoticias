var mysql = require('mysql');

module.exports = function(){
		return mysql.createConnection({
			host:'localhost',
			user:'localhost',
			password:'localhost',
			database:'portal_noticias'
		});
}

	