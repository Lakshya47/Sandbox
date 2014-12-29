var http = require("http");
var url = require("url");

function start(route){
/*	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log('Request for ' + pathname + ' recevied');
		
		route(pathname);
		
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World - " + pathname);
		response.end();
	}

	http.createServer(onRequest).listen(8800);

	console.log("Server has started.");*/
	function executeMe(callback){
		var temp = 23694859758648958856987548941164461664;
		temp = temp * temp * temp * temp * temp * temp * temp * temp * temp * temp * temp * temp * temp * temp * temp * temp;  
		console.log(temp);
		callback(temp);
	}
	
	
	executeMe(function(rows){
		var result = rows;
		console.log(result);
	});
	console.log('END');
};

exports.start = start;