var http = require("http");
var fs = require("fs");
var url = require("url");

exports.start = function(){
	http.createServer(function(req,res){
		var pathname = url.parse(req.url).pathname;
		console.log(pathname);
		if(pathname=="/start"){
			fs.readFile('./index.html','utf-8',function(err,data){
				if(err){
					throw err;
				}else{
					res.writeHead(200,{'Content-Type':'text/html'});
					res.write(data);
					res.end();
				}
			});			
		}else if(pathname=="/change"){
			fs.readFile('./change.html','utf-8',function(err,data){
				if(err){
					throw err;
				}else{
					res.writeHead(200,{'Content-Type':'text/html'});
					res.write(data);
					res.end();
				}
			});		
		}else if(pathname=="/"){
			fs.readFile('./start.html','utf-8',function(err,data){
				if(err){
					throw err;
				}else{
					res.writeHead(200,{'Content-Type':'text/html'});
					res.write(data);
					res.end();
				}
			});		
		}

	}).listen(7070);
}
