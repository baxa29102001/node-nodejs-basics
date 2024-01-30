import { rm } from "fs/promises";
import { existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const remove = async () => {
  const __filename = fileURLToPath(new URL(import.meta.url).href);
  const projectFolder = dirname(__filename);

  if (!existsSync(join(projectFolder, "files", "fileToRemove.txt"))) {
    throw new Error("FS operation failed");
  }

  await rm(join(projectFolder, "files", "fileToRemove.txt"));
};

await remove();
