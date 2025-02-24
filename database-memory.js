import { randomUUID } from "node:crypto";
export class DatabaseMemory {
  #videos = new Map();

  //entries return id of each video in hash code
  list(search) {
    return Array.from(this.#videos.entries())
      .map((videoArray) => {
        const id = videoArray[0];
        const data = videoArray[1];

        return { id, ...data };
      })
      .filter((video) => {
        if (search) {
          return video.title.includes(search);
        }
        return true;
      });

    // filter returns only videos that match the search query
  }

  create(video) {
    const videoId = randomUUID();
    this.#videos.set(videoId, video);
  }
  update(id, video) {
    this.#videos.set(id, video);
  }
  delete(id) {
    this.#videos.delete(id);
  }
}
