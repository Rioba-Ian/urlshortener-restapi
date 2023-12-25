import {FastifyInstance} from "fastify";
import {createshortUrlHandler} from "./shorturl.controller";

async function shorturlRoutes(app: FastifyInstance) {
 app.post(
  "/",
  {
   // schema: {
   //     body:
   // }
  },
  createshortUrlHandler
 );
}

export default shorturlRoutes;
