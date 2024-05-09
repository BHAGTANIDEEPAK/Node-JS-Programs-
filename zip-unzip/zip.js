const zlib = require('zlib');   
const gzip = zlib.createGzip();   
const fs = require('fs');   
const inp = fs.createReadStream('test.txt');   
const out = fs.createWriteStream('test.txt.gz');   
inp.pipe(gzip).pipe(out);  
