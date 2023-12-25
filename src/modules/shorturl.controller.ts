import {FastifyReply, FastifyRequest} from "fastify";

export async function createshortUrlHandler(
 request: FastifyRequest,
 reply: FastifyReply
) {
 const body = request.body;

 try {
  return reply.code(200).send(body);
 } catch (e) {
  console.error(e);
  return reply.code(500).send(e);
 }
}
