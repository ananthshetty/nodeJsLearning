var http = require('http');
var fs = require('fs');
var url = require('url');

// http.createServer((req, res)=>{
//     fs.readFile('myFile1.txt', (err,data)=>{
//         res.writeHead(200, {'Content-Type':'text/html'});
//         res.write(data);
//         res.end();
//     })
// }
// ).listen(3002);


// append method
// fs.appendFile('myFile1.txt', '<br/> <b>Hello world</b> bol wala', (err,data)=>{
//     if(err) throw err;
//     console.log('saved !');
// });

// open method
// fs.open('myFile3.txt', 'w', (err,data)=>{
//     if(err) throw err;
//     console.log('saved2 !');
// })

// writeFile
// fs.writeFile('myFile1.txt', 'Hello world', (err, file)=>{
//     if(err) throw err;
//     console.log('Updated myFile1');
// })


// delete method
// fs.unlink('myFile.txt', (err,file)=>{
//     if(err) throw err;
//     console.log('deleted !');
// });

// rename file method
// fs.rename('myFile2.txt', 'newFile.txt', (err, file)=>{
//     if(err) throw err;
//     console.log('renamed the file with newFile');
// })

// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// var q = url.parse(adr, true);
// console.log(`local host: ${q.host}`);
// console.log(`path name: ${q.pathname}`);
// console.log(`search : ${q.search}`);
// console.log(`queryYear: ${q.query.year}, queryMonth: ${q.query.month}`);


// fs.appendFile('summer.html', `<!DOCTYPE html>
// <html>
// <body>
// <h1>Summer</h1>
// <p>I love the sun!</p>
// </body>
// </html>`, (err,file)=>{
//     if(err) throw err;
//     console.log('file winter is created');
// })

fs.appendFile('winter.html', `<!DOCTYPE html>
<html>
<body>
<h1>Winter</h1>
<p>I love the snow!</p>
</body>
</html>`, (err, file)=>{
    if(err) throw err;
    console.log('winter file is created');
    console.log(file);
})