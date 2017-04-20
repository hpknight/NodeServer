var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var testRoutes = require('./app/routes/api/test.api.js')(app, express);
app.use('/api', testRoutes);

app.listen(3000, function() {
	console.log('Listening on port 3000');
});