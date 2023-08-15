const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const PORT = 3000;

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use((req, res, next) =>{
    if(req.method === 'POST') {
        req.body.createAt = Date.now();
    }
    next();
});

server.use(router);

server.listen(PORT, () => {
    console.log(`JSON SERVER is running on port ${PORT}`)
});
