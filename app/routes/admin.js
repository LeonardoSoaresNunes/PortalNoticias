var dbConnection = require('../../config/dbConnection');


module.exports = function(app){
	app.get('/formulario_inclusao_noticia', function(req,res){
	res.render("admin/form_add_noticia" , {validacao:{} , noticia: {}});
	//app.app.controllers.admin.formulario_inclusao_noticia(app , req , res);
	});

	app.post('/noticias/salvar', function(req,res){
		res.render("noticias/noticias", {noticias : results});
		//app.app.controllers.admin.noticias_salvar(app , req , res);
	
		
		/*
		var noticias = req.body;

		req.assert('titulo','Titulo é obrigatório').notEmpty();
		req.assert('resumo', 'Resumo deve ter entre 10 e 100 caracteres').len(10 , 100);
		req.assert('autor','Autor é obrigatório').notEmpty();
		req.assert('text', 'Texto é obrigatório').notEmpty();
		req.assert('data', 'Data é obrigatório').notEmpty().isDate({format: 'YYY-MM-DD'});

		var erros = req.validationErros();

		if(erros){
			res.render("admin/form_add_noticia", {validacao :erros, noticia : noticia});
			return;
		}
		//var connection = application.config.dbConnection();
		//var noticiasModels = new application.app.models.NoticiasDao(connection);

		//noticiasModels.salvarNoticias(noticias , function(error , results){
			//res.redirect('/noticias');
		//})
	res.send(noticias);
*/

	});

}

