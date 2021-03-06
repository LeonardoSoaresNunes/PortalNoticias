module.exports.formulario_inclusao_noticia = function(app , req , res){
	res.render("admin/form_add_noticia" , {validacao:{} , noticia: {}});


}


module.exports.noticias_salvar = function(app , req , res){

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
		//});

}