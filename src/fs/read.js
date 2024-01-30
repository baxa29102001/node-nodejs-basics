import { existsSync } from "fs";
import { readFile } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const read = async () => {
  const __filename = fileURLToPath(new URL(import.meta.url).href);
  const projectFolder = dirname(__filename);

  if (!existsSync(join(projectFolder, "files", "fileToRead.txt"))) {
    throw new Error("FS operation failed");
  }

  readFile(join(projectFolder, "files", "fileToRead.txt"), (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  });
};

await read();
