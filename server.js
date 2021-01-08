let http = require('http');
let fs = require('fs');
 
let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./cv2019.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
						respone.write('Whoops! File not found!');
						console.log("ERR_FILE_NOT_FOUND")
        } else {
						response.write(data);
						console.log("RES_OK_200")
        }
        response.end();
    });
}
http.createServer(handleRequest).listen(8000);
		