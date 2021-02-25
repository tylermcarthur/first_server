'use strict';

var routes = require('./routes');
var fs = require('fs');
var path = require('path');
var guestsPath = path.join(__dirname,'guests.json');

const http = require('http');
const port = process.env.PORT || 8000;

const server = http.createServer(function(req, res){
    if(routes[req.url] !== undefined){
        routes[req.url](req,res);
    }
    if(req.method === 'GET' && req.url === '/guests'){
        fs.readFile(guestsPath, 'utf8', function(err, guestsJSON){
            if (err){
                console.error(err.stack);
                res.statusCode= 500;
                res.setHeader('Content-Type', 'application/json');
                res.end('Internal Server Error');
            }
            res.setHeader('Content-Type', 'applivation/json')
            res.end(guestsJSON)
        });
    } else if (req.method === "GET" && req.url === '/guests/0'){
        fs.readFile(guestsPath, 'utf8', function(err, guestsJSON){
            if (err){
                console.error(err.stack);
                res.statusCode= 500;
                res.setHeader('Content-Type', 'application/json');
                res.end('Internal Server Error');
            }
            var guests = JSON.parse(guestsJSON);
            var guestsJSON = JSON.stringify(guests[0]);

            res.setHeader('Content-Type','application/json');
            res.end(guestsJSON);
        });
    } else if (req.method === "GET" && req.url === '/guests/1'){
        fs.readFile(guestsPath, 'utf8', function(err, guestsJSON){
            if (err){
                console.error(err.stack);
                res.statusCode= 500;
                res.setHeader('Content-Type', 'application/json');
                res.end('Internal Server Error');
            }
            var guests = JSON.parse(guestsJSON);
            var guestsJSON = JSON.stringify(guests[1]);

            res.setHeader('Content-Type','application/json');
            res.end(guestsJSON);
        });
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type','text/plain')
        res.end('Not found');
    }
});

server.listen(port,function(){
    console.log('Listening on port',port);
});