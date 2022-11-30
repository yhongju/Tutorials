// @ts-check

/**
 * Refactory main script with custom API
 */

/* Datas */
// Define type of single post
/**
 * @typedef Post
 * @property {string} id
 * @property {string} title
 * @property {string} content
 */

/**
 * @typedef APIResponse
 * @property {number} statusCode
 * @property {string | Object} body
 */

/**
 * @typedef Route
 * @property {RegExp} url  // Not string for capture id
 * @property {"GET" | "POST"} method
 * @property {(matches: string[], body: Object.<string, *> | undefined) => Promise<APIResponse>} callback
 */

/* Read file */
const fs = require("fs");

// Magic string
const DB_FILE_NAME =
  "./node-js/fastcampus-lecture/ch-05/database/database.json";

/** @returns {Promise<Post[]>} */
const getPostsFile = async () => {
  // If without "await", return value's type will be "Promise<string>" not "string"
  const json = await fs.promises.readFile(DB_FILE_NAME, "utf-8");

  return JSON.parse(json).posts;
};

/** @param {Post[]} posts */
const savePosts = async (posts) => {
  // Object to write
  const toWrite = {
    posts,
  };

  // If just return, cannot cert file writing done -> DB confusion issue
  await fs.promises.writeFile(DB_FILE_NAME, JSON.stringify(toWrite), "utf-8");
};

/** @type {Route[]} */
const routes = [
  /* Get posts */
  {
    url: /^\/posts$/,
    method: "GET",
    callback: async () => ({
      statusCode: 200,
      body: await getPostsFile(),
    }),
  },
  /* Get id specified posts */
  {
    url: /^\/posts\/([a-zA-Z0-9_]+)$/,
    method: "GET",
    callback: async (matches) => {
      // Captured ID
      const postId = matches[1];

      const posts = await getPostsFile();
      const retPost = posts.find((post) => post.id === postId); // Find matched post

      // If not matched post exists
      if (!retPost) {
        return {
          statusCode: 404,
          body: "404 Not found!",
        };
      }

      return {
        body: retPost, // "Post" type
        statusCode: 200,
      };
    },
  },
  /* Post request */
  {
    url: /^\/posts$/,
    method: "POST",
    callback: async (_, body) => {
      // Not JSON body from request
      if (!body) {
        return {
          statusCode: 400,
          body: "Not JSON format request.",
        };
      }

      /** @type {string} */
      // Off prefer option for type specifying
      /* eslint-disable-next-line prefer-destructuring */
      const title = body.title;

      const newPost = {
        id: title.toLowerCase().replaceAll(" ", "_"),
        title,
        content: body.content,
      };

      const posts = await getPostsFile();

      // Insert to JS object and save file
      posts.push(newPost);
      savePosts(posts);

      return {
        statusCode: 200,
        body: newPost,
      };
    },
  },
];

// Global obejct "module"
module.exports = {
  routes,
};
