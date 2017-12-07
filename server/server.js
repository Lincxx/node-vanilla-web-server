//non-express
const http = require('http');
const fs = require('fs');

//HTML
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type':'text/html'});
//     let HTML = fs.readFileSync(`${__dirname}/index.html`);
//     res.end(HTML);
// })


const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'application/json'});
    const names = ["Jeremy", "Brad", "Rhonda"]
    const cars = {
        name:"Ford",
        model:"Fiesta"
    }
    const json = JSON.stringify({
        names,
        cars
    })
    //to display json data we need to turn into a string
    res.end(json);
})
server.listen(8181, '127.0.0.1');
console.log('Server is running');

//console.log(__dirname);