var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var serveStatic = require('serve-static');
var watchedConfig = require('watched-config');

var app = express();
var config = {};

function serverStart() {
	config.port = config.port || 3333;
	console.log("\n\nServing "+config.sitePath+" on "+config.port);

	app.use( bodyParser.json() );
	app.use( serveStatic(config.sitePath, {'index': ['index.html']}) );

	app.theServer = http.createServer(app);
	app.theServer.listen(config.port);
}

function serverRestart() {
	if( !app.theServer ) {
		serverStart();
		return;
	}
	console.log("Stopping server...");
	app.theServer.stopping = true;
	app.theServer.close( function() {
		console.log("Server stopped.");
		app.theServer = null;
		serverStart();
	});
	setTimeout(function() {
			 console.error("Server stop timed out.");
			 serverStart();
	}, 10*1000);
}

var serverShutdown = function() {
	console.log("Server shutting down...");
	setTimeout(function() {
			 console.error("Could not close connections in time, forcefully shutting down");
			 process.exit(1)
	}, 10*1000);
	app.theServer.close(function() {
		console.log("Server stopped.");
		process.exit()
	});
}

process.on ('SIGTERM', serverShutdown);
process.on ('SIGINT', serverShutdown);

watchedConfig(
	'config.json',
	function(_config) {
		config = _config;
	}
);

serverStart();
