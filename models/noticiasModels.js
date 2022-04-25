
module.exports = function(){
	var noticiasModels = require('./app/models/noticiasModels');

		this.getNoticias = function(connection , callback){
			connection.query('SELECT *from noticias', callback);
		};
		this.getNoticias = function(connection , callback){, callback
			connection.query ('select * from noticias where id_noticia = 2'); 
		}
	return this;

}


