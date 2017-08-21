var express = require('express');
var bodyParser = require('body-parser');
var employees = require('./routes/employees');
var totaling = require('./routes/totaling');
var switchactive = require('./routes/switchactive');

var app = express();

var port = 5000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/employees', employees);
app.use('/totaling', totaling);
app.use('/switchactive', switchactive);

app.listen(port, function(){
    console.log('listening on port', port);
})