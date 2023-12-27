import {FastifyReply, FastifyRequest} from "fastify";
import {CreateShortUrlInput, GetShortUrlInput} from "./shorturl.schema";
import {
 createShortUrl,
 getShortUrl,
 incrementAnalytics,
} from "./shorturl.service";

export async function createshortUrlHandler(
 request: FastifyRequest<{Body: CreateShortUrlInput}>,
 reply: FastifyReply
) {
 const body = request.body;

 try {
  const shortUrl = await createShortUrl(body);

  return reply.code(200).send(shortUrl);
 } catch (e) {
  console.error(e);
  return reply.code(500).send(e);
 }
}

export async function getShortUrlHandler(
 request: FastifyRequest<{Params: {shortId: string}}>,
 reply: FastifyReply
) {
 const {shortId} = request.params;

 console.log(shortId, "shortId");

 if (!shortId) {
  return reply.code(400).send("Short :id is required.");
 }

 const destUrl = await getShortUrl({shortId});

 if (!destUrl) {
  return reply.code(404).send("Invalid short url");
 }

 setImmediate(async () => {
  try {
   await incrementAnalytics(shortId);
  } catch (e) {
   console.error("There was an error in adding analytics.");
  }
 });

 return reply.redirect(destUrl.destination);
}
