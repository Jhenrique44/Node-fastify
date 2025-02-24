// import { createServer } from 'node:http';

// const server = createServer((req, res) => {
//     res.write('hello world!');

//     return res.end();
// })

// server.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });

import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();

const database = new DatabaseMemory();

// POST http://localhost:3000/videos
server.post("/videos", (request, res) => {
  const { title, description, duration } = request.body;
  database.create({
    title,
    description,
    duration,
  });
  return res.status(201).send({ message: "Video created successfully!" });
});
// GET http://localhost:3000/videos

server.get("/videos", (req) => {
  const search = req.query.search;
  const videos = database.list(search);

  return videos;
});
// POST http://localhost:3000/videos

server.put("/videos/:id", (req, res) => {
  const videoId = req.params.id;
  const { title, description, duration } = req.body;
  const video = database.update(videoId, {
    title,
    description,
    duration,
  });

  return res.status(204).send({ message: "Update Successfuly" });
});

server.delete("/videos/:id", () => {
  return "dasd";
});

server.listen({ port: 3000 });
