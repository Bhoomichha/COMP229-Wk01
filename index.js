// const http = require('http');
// http.createServer(function (req, res) {
//     res.write('<h1>Welcome to this class</h1>');
//     res.end();
// }).listen(8081);

// const http = require('http');
// // let a =()=>{

// // }
// http.createServer((req, res) =>/*function*/ {
//     res.write('<h1>Welcome to this class</h1>');
//     res.end();
// }).listen(8081);


//imports
const express = require('express');
const morgan = require('morgan');

//APP init
const app = express();

//first route
//post method is used for sensitive and confidential information
app.get('/', (req, res) => {
    res.json({ message: "Welcome to the class" })
});
app.listen('8081');
