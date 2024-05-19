// u json setujemo kao MAIN (ulaznu datoteku!)

const http = require('http'); 
const app = require("./app");  

const server = http.createServer(app); 

server.listen(3004);  

server.once('listening', function(){  
    console.log('server je pokrenut na adresi http://localhost:3004'); 
});  
