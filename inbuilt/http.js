let http = require('http');

let server = http.createServer((req,res) => {
    res.write(<h1>First Time Server with Node js.</h1>);
    res.end();
})

server.listen(7600)