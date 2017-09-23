var child_process = require('child_process');

/*child_process.exec('C:\Users\guilherme.santos\Desktop\Desktop\170308\Mongo_Server_Start.bat', function(error, stdout, stderr) {
    console.log(stdout);
});*/
console.log("Iniciou");
//child_process.spawn('cmd.exe', ['/c','Mongo_Server_Start.bat']);
child_process.spawn('cmd.exe', ['/c','C:\Users\guilherme.santos\Documents\FATEC\TCC\Mongo_Server_Start.bat']);
console.log("Finalizou");
/*var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
Task = require('./api/models/todoListModel'), //created model loading here
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);*/