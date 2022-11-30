// @ts-check

/**
 * Build very simple blog posting web service server
 * Use RESTful api with HTTP verb
 * Use custom api in new script
 * Use the process's memory-based datas
 *
 * Post feature:
 * GET /posts
 * GET /posts/:id -> ID specified posts
 * POST /posts
 */

/* Server */
const http = require("http");
const { routes } = require("./route-api");

const PORT = 4000;

const server = http.createServer((req, res) => {
  // Make inline async function for await
  const driver = async () => {
    // Find request at routes
    const route = routes.find(
      // Find matched route from req's properties
      (_route) =>
        req.url &&
        req.method &&
        _route.url.test(req.url) &&
        _route.method === req.method,
    );

    /* Check request validation */
    if (!route || !req.url) {
      res.statusCode = 404;
      res.end("404 Not found!");
      return;
    }

    const postCapturedIdArr = route.url.exec(req.url);

    // Not RegExpExecArr null graud
    if (!postCapturedIdArr) {
      res.statusCode = 404;
      res.end("404 Not found!");
      return;
    }

    // Get data to post(body) from request
    /** @type {Object.<string, *> | undefined} */ const reqBody =
      (req.headers["content-type"] === "application/json" && // Only the data is json type
        (await new Promise((resolve, reject) => {
          req.setEncoding("utf-8");
          req.on("data", (chunk) => {
            // try-catch for not JSON format exception
            try {
              resolve(JSON.parse(chunk));
            } catch {
              reject(new Error("Not JSON format request body."));
            }
          });
        }))) ||
      undefined;

    // If found, Call route's callback function and get Promise object with await
    const responseValues = await route.callback(postCapturedIdArr, reqBody);

    /* Assign response values */
    // Status code
    res.statusCode = responseValues.statusCode;

    // Handle Obejct type response body
    if (typeof responseValues.body === "object") {
      // If body is Object type
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      responseValues.body = JSON.stringify(responseValues.body);
    }

    // Else if string type
    res.end(responseValues.body);
  };

  driver();
});

server.listen(PORT, () => {
  /* eslint-disable-next-line no-console */
  console.log(`The server is listening at ${PORT} port!`);
});
