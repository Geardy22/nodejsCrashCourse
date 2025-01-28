//Entry Point
import http from 'http'; //module include in nodejs
//Import FS for asynchronous
import fs from 'fs/promises';
//Import url module
import url from 'url';
import path from 'path'
//Create a port Variable
const PORT = process.env.PORT;

// Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename,__dirname)

//Create variable server that will set up the http
const server = http.createServer(async (req, res) => {
    try {
        // Check if GET request
        if (req.method === 'GET') {
            let filePath;
            if(req.url === '/') {
                filePath = path.join(__dirname, 'public', 'index.html');
            } else if (req.url === '/about') {
                filePath = path.join(__dirname, 'public', 'about.html');
            } else {
                throw new Error('Not Found')
            }

            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();


        } else {
            throw new Error('Method not Allowed')
        }
    } catch (error) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Server Error');
    }

  

    //User can set header values
    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;
    // console.log(req.url);
    // console.log(req.method);

    //Instead of using those method above states, user can user writeHead method
    //res.writeHead(200, {'Content-Type': 'text/html'});

    //res.write('Hello World!'); //User can also put body header in end function.
    //res.end('<h1>Hello World!</h1>');
});

//Listen to a Port & can pass a function
server.listen(PORT, ()  => {
    console.log(`Server running on port ${PORT}`);
});