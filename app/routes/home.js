module.exports = function(app){
	app.get('/', function(req, res){
		res.render("home/index");
		//app.app.controllers.home.index(app, req, res);
	
	});
}
