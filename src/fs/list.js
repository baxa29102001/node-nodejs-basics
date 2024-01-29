import { existsSync } from "fs";
import { readdir } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const list = async () => {
  const __filename = fileURLToPath(new URL(import.meta.url).href);
  const projectFolder = dirname(__filename);

  if (!existsSync(join(projectFolder, "files"))) {
    throw new Error("FS operation failed");
  }
  try {
    const files = await readdir(join(projectFolder, "files"));
    console.log(files);
  } catch (err) {
    console.error(err);
  }
};

await list();
