// create a simple server

// const http = require('http');
// const url = require("url");
// const fs = require("fs");

const express = require("express");
const app = express();
const path = require("path")



const hostname = 'localhost';
const port = 8000;

// const server = http.createServer((req , res) => {
//     const q = url.parse(req.url, true);
//     const filename = "." + q.pathname;
//     // const hostingname = q;
//     // console.log(name);
//     if((filename === "./")){
//         fs.readFile("./index.html", (err, data) => {
//             if(err){
//                 res.writeHead(404, {'Content-Type': 'text/html'});
//                 // res.write("./404.html");
//                 return res.end("404 Not Found");
//             }
//             // res.statusCode = 200;
            
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             res.write(data);
//             return res.end();
            
//         }
    
//         );}
//     else if((filename === "./about.html") || (filename === "./contact-me.html")){
//     fs.readFile(filename, (err, data) => {
//         if(err){
//             res.writeHead(404, {'Content-Type': 'text/html'});
//             // res.write("./404.html");
//             return res.end("404 Not Found");
//         }
//         // res.statusCode = 200;
        
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         return res.end();
        
//     }

//     );} else{
//         fs.readFile("./404.html", (err, data) => {
//             if(err){
//                 res.writeHead(404, {'Content-Type': 'text/html'});
//                 // res.write("./404.html");
//                 return res.end("404 Not Found");
//             }
//             // res.statusCode = 200;
            
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             res.write(data);
//             return res.end();
            
//         }
    
//         );
//     }

// });

app.use(express.static("public"));



app.get("/", async (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "index.html"));
});

app.use( async( req, res, next) => {
    // console.error(err.stack)
    res.status(500).sendFile(path.join(__dirname, "404.html"));
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});