const http = require('http');
const url = require('url');

const getRoot = require('./root');
const getAbout = require('./about');
const getContact = require('./contact');

const port = 5000;
const name = 'John Smith';

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;

    let content;
    res.setHeader('Content-Type', 'text/html');

    switch (path) {
        case '/':
            content = `<p>${getRoot(name)}</p>`;
            res.statusCode = 200;
            break;
        case '/about':
            content = `<p>${getAbout(name)}</p>`;
            res.statusCode = 200;
            break;
        case '/contact':
            content = `<p>${getContact(name)}</p>`;
            res.statusCode = 200;
            break;
        case '/gallery':
            content = `<h1>This is the gallery page</h1>`;
            res.statusCode = 200;
            break;
        default:
            content = `<p>Invalid Request</p>`;
            res.statusCode = 404;
            break;
    }

    res.end(content);
});

server.listen(port, () => {
    console.log('Listening at port: ' + port);
});

