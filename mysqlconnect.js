var mysql=require('mysql');

MySqlModule= {
	storetomysql: function(req,res){
			const con=mysql.createConnection({
				host:"mydbinstance.cvmxgy7ndzr4.us-west-2.rds.amazonaws.com",
				user:"luis",
				password:"Luis1234",
				database: "luis"
			});
			con.connect(function(err){
			if(err){
				res.status(500).send('Cannot connect to Database')
				con.end();
				throw err;
			}
			console.log('connected');
			var sql = "INSERT INTO customers VALUES (?)";
			con.query(sql,[req.body.userText], function (err, result) {
				if (err){
					res.status(500).send('Failed to add customer!');
					con.end();
					throw err;
				}
				console.log("1 record inserted");
				res.status(200).send('Customer added!')
				con.end();
			});
		});
		//con.end();
	}
}
module.exports=MySqlModule;
//MySqlModule.storetomysql({body:{userText:"Anil"}});
