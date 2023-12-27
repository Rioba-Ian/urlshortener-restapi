import fastify from "fastify";
import shorturlRoutes from "./modules/shorturl.route";
import agenda from "./utils/agenda";
import cors from "@fastify/cors";

const server = fastify({
 logger: true,
});

server.get("/healthcheck", async function () {
 return {status: "ok"};
});

server.ready(async (err) => {
 if (err) throw err;
 await agenda.start();
});

async function main() {
 await server.register(cors, {
  origin: "*",
 });

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
