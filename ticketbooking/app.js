let express = require("express");
    app = new express();
    bodyParser = require('body-parser');
    mongoose = require('mongoose');
    autoIncrement = require('mongoose-autoincrement');
    _underscore = require("underscore")

app.use(bodyParser.json({limit: '10kb'}));
app.use(bodyParser.urlencoded({limit: '10kb', extended: true }));

mongoose.connect('mongodb://localhost/ticketBooking');

let router = express.Router();

app.use(express.static('dist/'));
let reqservice = require('./server/manager/rout');
 
app.use('/', reqservice);

app.get('/', function(req, res) {
    res.json({ message: 'Application is running here. hit on [ /api ] to connect database.' });
});

app.listen("3000",function(){
    console.log("!! server started on port 3000 !!");
});