var dbConnection = require('../../config/dbConnection');
module.exports = function(app){

	var connection = dbConnection();

	app.get('/noticias', function(req,res){
		//app.app.controllers.noticias.noticias(app , req , res);

		//var connection = application.config.dbConnection();
		//var noticiasModels = new application.app.app.models.NoticiasDao(connection); 


		noticiasModel.getNoticias(function(error , results){
		res.render("noticias/noticias", {noticias : results});
		//});
		
		connection.query('SELECT * FROM noticias' , function(err , results){
			//res.send(results);
			res.render("noticias/noticias",{noticias: results});

		});

		
		app.get('/noticia', function(req,res){
			//app.app.controllers.noticia.noticia(app , req , res);

			/*

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

	
	//res.render("noticias/noticias");
	});

}
