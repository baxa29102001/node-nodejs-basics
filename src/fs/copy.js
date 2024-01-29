import { existsSync } from "fs";
import { mkdir, copyFile, readdir } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const copy = async () => {
  const __filename = fileURLToPath(new URL(import.meta.url).href);
  const projectFolder = dirname(__filename);

  const folderName = join(projectFolder, "files_copy");
  if (!existsSync(join(projectFolder, "files")) || existsSync(folderName)) {
    throw new Error("FS operation failed");
  }
  try {
    await mkdir(folderName);

    const files = await readdir(join(projectFolder, "files"));
    Promise.all(
      files.map((item) =>
        copyFile(
          join(projectFolder, "files", item),
          join(projectFolder, "files_copy", item)
        )
      )
    );
  } catch (error) {
    console.log("error 14", error);
  }
};

await copy();
