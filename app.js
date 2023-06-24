const http =require('http');
const server=http.createServer((req,res)=>{
    if (req.url==='/'){
        res.end('on home page')
    }
    if (req.url==='/contact'){
        res.end('on contact page')
    }
    res.end('error page')
    // res.write('first server');
    // res.end()
})
server.listen(5000);