import fastify from "fastify";
import prisma from "../utils/prisma";
import {generateRandomString} from "../utils/utils";
import {CreateShortUrlInput, GetShortUrlInput} from "./shorturl.schema";
import agenda from "../utils/agenda";

export async function createShortUrl(input: CreateShortUrlInput) {
 const {destination} = input;

 const shortUrl = generateRandomString(6);

 const newShortUrl = await prisma.shortUrl.create({
  data: {
   destination: destination,
   shortUrl: shortUrl,
  },
 });

 await prisma.analytics.create({
  data: {
   ShortUrl: {
    connect: {
     id: newShortUrl.id,
    },
   },
  },
 });
 return newShortUrl;
}

export async function getShortUrl(input: GetShortUrlInput) {
 const {shortId} = input;

 const shortDestination = await prisma.shortUrl.findUnique({
  where: {
   shortUrl: shortId,
  },
 });
 agenda.schedule("in 2 seconds", "increment analytics", {shortId});

 return shortDestination;
}

export async function incrementAnalytics(shortId: string) {
 const shortUrlId = await prisma.shortUrl.findUnique({
  where: {
   shortUrl: shortId,
  },
 });

 await prisma.analytics.update({
  where: {
   shortUrlId: shortUrlId?.id,
  },
  data: {
   clicks: {
    increment: 1,
   },
  },
 });
}
