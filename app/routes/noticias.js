var dbConnection = require('../../config/dbConnection');
module.exports = function(app){

	var connection = dbConnection();

	app.get('/noticias', function(req,res){
		
		connection.query('SELECT * FROM noticias' , function(err , results){
			//res.send(results);
			res.render("noticias/noticias",{noticias: results});

		});

	
	//res.render("noticias/noticias");
	});

}
