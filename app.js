var express = require('express');
var app = express();

app.set('view engine', 'ejs');

var routes = require('./routes/routes.js');

app.use(express.static(__dirname+'/public'));

app.get('/', routes.home);
app.get('/:city', routes.city);

var port = process.env.PORT || 8080;

app.listen(port, function(req, res){
  console.log('catch the action on localhost:'+port);
});
