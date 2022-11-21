// @ts-check

/**
 * Build very simple blog posting web service server
 *
 * Use RESTful api
 */

const http = require("http");
const PORT = 4000;

/**
 * Post feature
 *
 * GET /posts
 *
 * [ID specified posts]
 * GET /posts/:id
 *
 * POST /posts
 */

const server = http.createServer((req, res) => {
  // Print user requested info
  console.log("Requested URL:", req.url);

  res.statusCode = 200;
  res.end("Hello from SERVER!");
});

// Driver code
server.listen(PORT, "localhost", () => {
  console.log(`The server is listening at ${PORT} port...`);
});
