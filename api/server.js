const express = require('express')

const server  = express();
server.use(express.json());

server.get('/', (req,res) => {
    res.send("<h1>&emsp;&emsp;&emsp;&emsp;API IS UP <h1>")
})


module.exports = server;