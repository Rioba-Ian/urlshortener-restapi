import {z} from "zod";
import zodToJsonSchema from "zod-to-json-schema";

const shortUrl = {
 destination: z
  .string({
   required_error: "Destination url is required.",
  })
  .url(),
};

const createshortUrl = z.object({
 ...shortUrl,
 id: z.string(),
});

const getShortUrl = z.object({
 shortId: z.string(),
});

export type CreateShortUrlInput = z.infer<typeof createshortUrl>;
export type GetShortUrlInput = z.infer<typeof getShortUrl>;

const createshortUrlResponseSchema = z.object({
 ...shortUrl,
});

export const createshortUrlResponseSchemaJson = zodToJsonSchema(
 createshortUrlResponseSchema,
 "createshortUrlResponseSchema"
);
