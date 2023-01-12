const http = require('http');

http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type' : 'text/html; charest=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
})
  .listen(80, ()=> {
    console.log('80번 포트에서 서버 대기 중입니다!');
  })