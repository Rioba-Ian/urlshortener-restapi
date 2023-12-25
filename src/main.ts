import fastify from "fastify";
import shorturlRoutes from "./modules/shorturl.route";

const server = fastify();

server.get("/healthcheck", async function () {
 return {status: "ok"};
});

async function main() {
 server.register(shorturlRoutes, {prefix: "/api/shorturl"});
 try {
  await server.listen({port: 3000, host: "0.0.0.0"});
  console.log(`Server listening on port 3000`);
 } catch (e) {
  console.error(e);
  process.exit(1);
 }
}

main();
