import { mkdir, copyFile, rename as renameFile } from "fs/promises";
import { existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const rename = async () => {
  const __filename = fileURLToPath(new URL(import.meta.url).href);
  const projectFolder = dirname(__filename);
  const oldPathUrl = join(projectFolder, "files", "wrongFilename.txt");
  const newPathUrl = join(projectFolder, "files", "properFilename.md");
  if (!existsSync(oldPathUrl) || existsSync(newPathUrl)) {
    throw new Error("FS operation failed: File already exists");
  }
  await renameFile(
    join(projectFolder, "files", "wrongFilename.txt"),
    join(projectFolder, "files", "properFilename.md")
  );
};

await rename();
