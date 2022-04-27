function NoticiasDao(connection){
	this._connection = connection;

}

NoticiasDao.prototype.getNoticias = function(connection , callback){
	connection.query('SELECT *from noticias', callback);
}


NoticiasDao.prototype.getNoticias = function(connection , callback){, callback
	connection.query ('select * from noticias where id_noticia = 2', callback); 
		}

NoticiasDao.prototype.salvarNoticias = function(noticia , connection , callback){
	connection.query('insert into noticias set ?', noticia, callback);

		}

module.exports = function(){
	var noticiasModels = require('./app/models/noticiasModels');

	/*

		this.getNoticias = function(connection , callback){
			connection.query('SELECT *from noticias', callback);
		};
		this.getNoticias = function(connection , callback){, callback
			connection.query ('select * from noticias where id_noticia = 2', callback); 
		}

		this.salvarNoticias = function(noticia , connection , callback){
			connection.query('insert into noticias set ?', noticia, callback);

		}
		*/

	return NoticiasDao;

}


