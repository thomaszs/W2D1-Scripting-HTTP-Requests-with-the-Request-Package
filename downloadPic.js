var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
       .on('error', function (err) {                                   // Note 2
         throw err; 
       })
       .on('response', function (response) {                           // Note 3
        console.log('Response Status Message:', response.statusMessage, 'Content Type:', response.headers['content-type'])
        console.log('Downloading complete');
      })
       .pipe(fs.createWriteStream('./future.jpg'));    
        console.log('Downloading image.')
// Notes:
// 1. `request.get` is equivalent to `request()`
// 2. `request.on('error', callback)` handles any error
// 3. `request.on('response, callback)` handles the response
