import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const fileContent = await readFile(filePath);
    const hash = createHash('sha256').update(fileContent).digest('hex');

    console.log(hash);
};

await calculateHash();