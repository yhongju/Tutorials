// @ts-check
/* eslint-disable no-console */

/**
 * Build very simple blog posting web service server
 * Use RESTful api with HTTP verb
 *
 * Post feature:
 * GET /posts
 * GET /posts/:id -> ID specified posts
 * POST /posts
 *
 * With a process's memory-based datas
 */

// Datas

// Define type of single post
/**
 * @typedef Post
 * @property {string} id
 * @property {string} title
 * @property {string} content
 */

// Define type of set of posts
/** @type {Post[]} */
const posts = [
  {
    id: "id00",
    title: "First post title",
    content: "Hello world!",
  },
  {
    id: "id01",
    title: "나의 두 번째 포스트", // Hangul
    content: "Foo bar!",
  },
];

const http = require("http");

const PORT = 4000;

const server = http.createServer((req, res) => {
  // Process by HTTP verb and URL
  // req.method, req.url

  // Get id from capturing group
  const POSTS_ID_REGEXP = /^\/posts\/([a-zA-Z0-9_]+)$/;

  // [1] index is captured content
  const capturedPostsId = req.url && POSTS_ID_REGEXP.exec(req.url)?.[1];

  if (req.method === "GET" && req.url === "/posts") {
    // General get post request

    // Return value: All posts
    const retData = {
      // Posts key
      posts: posts.map((post) => ({
        id: post.id,
        title: post.title,
      })),
      // Object length key
      totalLength: posts.length,
    };

    // Send response for prevent "response hanging"
    res.statusCode = 200; // [200 ~ 299] HTTP successful response status code

    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify(retData));
  } else if (req.method === "GET" && capturedPostsId) {
    // ID specifying get post request

    // Get id specified post from posts
    const postById = posts.find((post) => post.id === capturedPostsId);

    // Check post exists
    if (postById) {
      // Param1, 2 - Key: Value
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.end(JSON.stringify(postById));

      res.statusCode = 200;
    } else {
      // If there is no mathed post

      res.statusCode = 404;
      res.end("404 Not found");
    }
  } else if (req.method === "POST" && req.url === "/posts") {
    // General post the post request

    // Listening event
    req.setEncoding("utf-8"); // By default, returns Buffer object
    req.on("data", (chunk) => {
      // Parsing requested data to JSON
      // With typedef for period approach

      /**
       * @typedef ParsedPostData
       * @property {string} title
       * @property {string} content
       */

      /** @type ParsedPostData */
      const parsedData = JSON.parse(chunk);

      // Insert to posts DB(?)
      posts.push({
        // Generate id value by requested title
        id: parsedData.title.toLowerCase().replaceAll(" ", "_"),
        // // Diffrent way wtih RegExp
        // id: parsedData.title.toLowerCase().replace(/\s/g, "_"),

        title: parsedData.title,
        content: parsedData.content,
      });
    });

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
