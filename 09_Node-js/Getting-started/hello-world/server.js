// @ts-check

const http = require("http");

const hostname = "localhost";
const port = 3000;

/* Server */
/** @type{http.Server} */
const server = http.createServer(
  (
    /** @type {http.IncomingMessage} */ req,
    /** @type {http.ServerResponse} */ res,
  ) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, world!");
  },
);

// typeof server variable === object
server.listen(port, hostname, () => {
  /* eslint-disable-next-line no-console */
  console.log(`Server running at http://${hostname}:${port}/`);
});
