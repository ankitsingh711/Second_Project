let http = require('http');

let server = http.createServer((req,res) => {
    res.write('First Time Server with Node js');
    res.end();
}) 

server.listen(7600)

