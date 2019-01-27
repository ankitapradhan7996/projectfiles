var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mysqlconnect=require('./model/mysqlconnect');

app.use('/',express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


console.log('App listening at port 8087');
app.listen(8087);
app.post('/add',function(req,res){
	console.log(req.body);
	mysqlconnect.storetomysql(req,res);
});