import {FastifyInstance} from "fastify";
import {createshortUrlHandler, getShortUrlHandler} from "./shorturl.controller";
import {createshortUrlResponseSchemaJson} from "./shorturl.schema";

async function shorturlRoutes(app: FastifyInstance) {
 app.post(
  "/",
  {
   schema: {
    body: createshortUrlResponseSchemaJson,
   },
  },
  createshortUrlHandler
 );

 app.get("/:shorturl", getShortUrlHandler);
}

export default shorturlRoutes;
