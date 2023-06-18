import path from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream} from 'fs';
import { rm } from 'fs/promises';
import { createGzip } from 'zlib';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
const archivePath = path.join(__dirname, "files", "archive.gz");

const compress = async () => {
    const readStream = createReadStream(filePath);
    const writeStream = createWriteStream(archivePath);

    await pipeline(readStream, createGzip(), writeStream);
    await rm(filePath);

    console.log('File compressed successfully!')
};

await compress();