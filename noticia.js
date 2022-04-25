var http = require('http');

var server = http.createServer(function (req, res){

	var categoria = req.url;

	if(categoria =='/tecnologia'){
		res.end("<html><body>Noticia de Tecnologia</body></html>");

	}else if (categoria == '/processador') {
		res.end("<html><body>Noticias de Processadores</body></html>");

	}else if (categoria =='/empresas') {
		res.end("<html><body>Noticias das maiores empresas do mundo</body></html>");

	}else{
		res.end("<html><body>Portal N</body></html>")
	}
	
});

server.listen(3000);




