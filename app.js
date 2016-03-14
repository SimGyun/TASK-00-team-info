/**
 * Created by lingchenxuan on 16/3/12.
 */
var express = require('express');
var app = express();
var path = require('path');

app.set('views', __dirname + '/tpl');
app.set( 'view engine', 'html' );
app.engine( '.html', require( 'ejs' ).__express );
app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.render('./index');
});

app.listen(8080, function() {
	console.log('Server listening on 8080');
});