const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const PORT = 8000;

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.submitted = `${new Date().toDateString()}`;
  }
  // Continue to JSON Server router
  next();
});

server.use(router);
server.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`);
});
