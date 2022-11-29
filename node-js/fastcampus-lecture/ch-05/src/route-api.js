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

/** @type {Route[]} */
const routes = [
  /* Get posts */
  {
    url: /^\/posts$/,
    method: "GET",
    callback: async () => ({
      statusCode: 200,
      body: posts,
    }),
  },
  /* Get id specified posts */
  {
    url: /^\/posts\/([a-zA-Z0-9_]+)$/,
    method: "GET",
    callback: async (matches) => {
      // Captured ID
      const postId = matches[1];
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

      posts.push(newPost);

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
