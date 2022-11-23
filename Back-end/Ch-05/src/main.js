// @ts-check
/* eslint-disable no-console */

/**
 * Build very simple blog posting web service server
 *
 * Use RESTful api with HTTP verb
 */

/**
 * Post feature
 *
 * GET /posts
 * GET /posts/:id -> ID specified posts
 * POST /posts
 */

const http = require("http");

const PORT = 4000;

const server = http.createServer((req, res) => {
  // Process by HTTP verb and URL
  // req.method, req.url

  // Get id from capturing group
  const POSTS_ID_REGEXP = /^\/posts\/([a-zA-Z0-9_]+)$/;

  // [1] index is captured content
  const capturedId = req.url && POSTS_ID_REGEXP.exec(req.url)?.[1];

  if (req.method === "GET" && req.url === "/posts") {
    // General get post request

    // Send response for prevent "response hanging"
    res.statusCode = 200; // [200 ~ 299] HTTP successful response status code
    res.end("List of posts");
  } else if (req.method === "GET" && capturedId) {
    // ID specifying get post request

    // Print captured id
    console.log(`Requested ID: ${capturedId}`);

    res.statusCode = 200;
    res.end("List of id specified posts");
  } else if (req.method === "POST" && req.url === "/posts") {
    // General post the post request

    res.statusCode = 200;
    res.end("Create the posts");
  } else {
    // Otherwise

    res.statusCode = 404; // [400 ~ 499] HTTP client error status code
    res.end("404 Not found");
  }
});

// Driver code
server.listen(PORT, "localhost", () => {
  console.log(`The server is listening at ${PORT} port...`);
});
