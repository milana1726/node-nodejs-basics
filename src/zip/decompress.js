import path from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream} from 'fs';
import { rm } from 'fs/promises';
import { createGunzip } from 'zlib';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
const archivePath = path.join(__dirname, "files", "archive.gz");

const decompress = async () => {
    const readStream = createReadStream(archivePath);
    const writeStream = createWriteStream(filePath);

    await pipeline(readStream, createGunzip(), writeStream);
    await rm(archivePath);

    console.log('File decompressed successfully!');
};

await decompress();