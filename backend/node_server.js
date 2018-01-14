var express = require('express');
var app = express();
var path = require('path');
// This initiates to help getting data from request of type GET
//var url  = require('url');
var dbService  = require('./services/dbService.js');

var port = 1337;
// Setting context root for serving static files
app.use(express.static('../'));
// For parsing request values as jSON when POST is used from client side
app.use(bodyParser.json());
//Add headers
app.use(function (req, res, next) {
    //Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    //Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    //Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    //Pass to next layer of middleware
    next();
});

/*app.get('/', function(request, response){
    response.sendfile(path.resolve('../index1.html')) 
});*/

app.post('/validate', function(request, response){
    var url_parts = url.parse(request.url, true);
    if ( url_parts.query.username == "admin" && url_parts.query.password == "pwd"){
        //response.sendFile(path.resolve('../modules/home/views/home.html')); 
        dbService.dbRead(function(data){
            response.send(data);
        });
    }else {
		response.send("Error");
	 }
});

app.get('/insertDummy', function(request, response){
    // Session handling mechanism
    if ( url_parts.query.username == "admin" && url_parts.query.password == "pwd"){
        //response.sendFile(path.resolve('../modules/home/views/home.html')); 
        dbService.dbInsert(function(data){
            response.send(data);
        });
    }else {
        response.send("Error");
     }
});
app.listen(port);
console.log('Node.js express server started on port %s', port);



