const express = require('express');
var morgan = require('morgan');
const postRouter = require('./posts/postRouter')
const Db = require('./posts/postDb')

const server = express();

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  const method = req.method;
  const url = req.url;
  const ts = new Data().toISOString();
  next();
}



//global middleware
server.use(morgan("tiny"))
server.use(express.json())
server.use('/api/post', postRouter)

module.exports = server;
