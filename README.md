# URL Shortener API

This project is a URL shortener API built with Fastify, TypeScript, and Prisma. It provides a service that takes long URLs and generates shorter, more manageable URLs.

## Technologies Used

- Fastify: A web framework for Node.js known for its high performance and low overhead.
- TypeScript: A statically typed superset of JavaScript that adds types to the language.
- Prisma: A database toolkit used for database operations.

## Deployment

- Vercel: Serverless vercel functions

## API Endpoints

- `POST /api/shorturl`: Creates a new short URL.

  - Request body should be a JSON object with a `destination` property containing the URL to shorten.
  - Returns a JSON object with the short URL.

- `GET /api/shorturl/:shortId`: Redirects to the original URL associated with the given `shortId`.
  - `shortId` should be replaced with the ID of the short URL.
  - Increments the count in the analytics for the URL.

## How to Consume the API

You can consume the API using any HTTP client like `fetch` in JavaScript, `requests` in Python, or tools like Postman. Here's an example using `fetch`:

```js
// Create a new short URL
fetch("http://localhost:3000/api/shorturl", {
 method: "POST",
 headers: {"Content-Type": "application/json"},
 body: JSON.stringify({destination: "https://example.com"}),
})
 .then((response) => response.json())
 .then((data) => console.log(data));
```

### Acknowledgements

- Author: Ian Rioba

## How to Improve the API

Contributions are welcome! Feel free to fork the repository and submit pull requests. You can also open issues for any bugs or improvements you want to suggest.

Before contributing, please make sure to understand the project structure and technologies used. If you have any questions, don't hesitate to ask.
