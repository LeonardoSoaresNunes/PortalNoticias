module.exports.noticias = function(app , req , res){
	var connection = application.config.dbConnection();
		var noticiasModels = new application.app.app.models.NoticiasDao(connection); 


		noticiasModel.getNoticias(function(error , results){
			res.render("noticias/noticias", {noticias : results});
		});
		

}

module.exports.noticia = function(app , req , res){
	var connection = application.config.dbConnection();
		var noticiasModels = new application.app.app.models.NoticiasDao(connection); 


		noticiasModel.getNoticias(function(error , results){
			res.render("noticias/noticia", {noticia : results});
		});
		

}