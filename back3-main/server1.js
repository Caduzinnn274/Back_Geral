//Criando o primeiro servidor http

const http = require('http');
const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    console.log("Efetuando pedido");
    res.write("<h1>Pedido Aceito</h1>");
    res.write("<h2>Já entendi que o pedido foi aceito</h2>");
    res.end();
})


server.listen(3000, "localhost", ()=>{
    console.log("Servidor iniciado");
})