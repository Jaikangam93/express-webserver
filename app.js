// const http = require('http');
//
// const hostname = '127.0.0.1';
// const port = 3000;
//
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });
//
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// Above code is how the node server is
//*************************
//Below will be start using express
//*************************

//get the express from the node module
const express = require('express');

//express assign to  app
const app = express();

//route
app.get('/', function(req, res){
  res.send('Hello Angam');
});

app.get('/contactus', function(req, res){
  res.send('<h1> contactus page </h1>');
});
//Dynamic route
app.get('/user/:name', function(req, res){
  let user = req.params.name;
  res.send('<h1> User name from the Dynamic route is :' + user+ '</h1>');
});


//localhost running or started
app.listen(3000, function(){
  console.log('server started on port 3000...')
});
