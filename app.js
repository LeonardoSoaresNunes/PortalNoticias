
var app = require('./config/server');

var rotaHome = require('./app/routes/home')(app);
//rotaHome(app);

var rotaAdmin = require('./app/routes/admin')(app);
//rotaAdmin(app);

var rotaNoticias = require('./app/routes/noticias1')(app);
//rotaNoticias(app); menos codigo na aplicação

var rotaSobre = require ('./app/routes/sobre');
rotaSobre(app);

var rotaServicos = require('./app/routes/servicos');
rotaServicos(app);

var rotaContato = require('./app/routes/contato');
rotaContato(app);

var rotaTecnologia = require('./app/routes/tecnologia');
rotaTecnologia(app);

var rotaProcessador = require('./app/routes/processador');
rotaProcessador(app);



var rotaNoticia = require('./app/routes/noticia')(app);
//rotaNoticias(app); menos codigo na aplicação






app.listen(3000, function(){
	console.log("Server on ");

});


//Rever modulos 7 e 8