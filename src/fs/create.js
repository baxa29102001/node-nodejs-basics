import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const create = async () => {
  const __filename = fileURLToPath(new URL(import.meta.url).href);
  const __dirname = path.dirname(__filename);

  const filePath = path.join(__dirname, "files", "fresh.txt");
  if (fs.existsSync(filePath)) {
    throw new Error("FS operation failed: File already exists");
  }

  const content = "I am fresh and young";
  fs.writeFileSync(filePath, content);

  console.log("File created successfully:", filePath);
};

await create();
