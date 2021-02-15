const http = require('http');

const server = http.createServer((req,res) => {

       // get request through, url get data from server -simple way

       if(req.url == '/'){
                 res.writeHead(200, {'content-type': 'text/html'});
                 res.write('<h1>this is home page</h1>');
                 res.end()
       }else if(req.url == '/about'){
                res.writeHead(200, {'content-type':'text/html'})
                res.write('<h1>this is about page</h1>');
                res.end()
       }else if(req){
                res.writeHead(200, {'content-type':'text/html'})
                res.write('<h1>this is contact page</h1>');
                res.end()
       }

       
     
});

server.listen(7070);
console.log('sever start')
