import { createServer } from 'http';

const PORT = process.env.PORT;

const users = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jane Doe'},
    {id: 3, name: 'Jim Doe'}
];

//Logger Middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}


// Simple API
const server = createServer((req, res) => {
    if (req.url === '/api/users' && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(users));
        res.end();
    } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
        const id = req.url.split('/')[3]; //get user ID
        const user = users.find((user) => user.id === parseInt(id));
        res.setHeader('Content-Type', 'application/json');

        if (user) {
            res.write(JSON.stringify(user));
        } else {
            res.statusCode = 404;
            res.write(JSON.stringify({message: 'User Not Found'}));
        }
        res.end();
    }
     else {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 404;
        res.write(JSON.stringify({message: 'Route Not Found'}));
        res.end();
    }
});

//Listen to a Port & can pass a function
server.listen(PORT, ()  => {
    console.log(`Server running on port ${PORT}`);
});