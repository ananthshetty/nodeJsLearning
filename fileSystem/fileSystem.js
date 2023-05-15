var http = require('http');
var fs = require('fs');

// append method
// fs.appendFile('myFile1.txt', 'Hello world 2', (err,data)=>{
//     if(err) throw err;
//     console.log('saved !');
// });

// open method
// fs.open('myFile3.txt', 'w', (err,data)=>{
//     if(err) throw err;
//     console.log('saved2 !');
// })

// writeFile
fs.writeFile('myFile1.txt', 'Hello world', (err, file)=>{
    if(err) throw err;
    console.log('Updated myFile1');
})

http.createServer((req, res)=>{
    fs.readFile('myFile1.txt', (err,data)=>{
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        res.end();
    })
}
).listen(3002);
