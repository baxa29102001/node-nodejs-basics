import path, { dirname } from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import "./files/c.js";
import { fileURLToPath } from "url";

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = async () => await import("./files/a.json");
} else {
  unknownObject = async () => await import("./files/b.json");
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(
  `Path to current file is ${fileURLToPath(new URL(import.meta.url).href)}`
);
console.log(
  `Path to current directory is ${dirname(
    fileURLToPath(new URL(import.meta.url).href)
  )}`
);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };
