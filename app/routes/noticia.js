//var dbConnection = require('../../config/dbConnection');
module.exports = function(app){

	//var connection = dbConnection();

	app.get('/noticia', function(req,res){

		var connection = application.config.dbConnection();
		var noticiasModels = new application.app.app.models.NoticiasDao(connection); 


		noticiasModel.getNoticias(function(error , results){
			res.render("noticias/noticia", {noticia : results});
		});
		
		/*
		connection.query('SELECT * FROM noticias' , function(err , results){
			//res.send(results);
			res.render("noticias/noticias",{noticias: results});

		});

	*/
	//res.render("noticias/noticias");
	});

}
