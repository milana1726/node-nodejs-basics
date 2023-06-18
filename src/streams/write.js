import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
    const stream = createWriteStream(filePath, {flags: 'a'});

    process.stdin.pipe(stream);
};

await write();