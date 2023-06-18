import path from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';
import { ERROR_MESSAGE } from '../constants/constants.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    try {
        const fileContent = await readFile(filePath, 'utf-8');
        console.log(fileContent);
    } catch {
        throw new Error(ERROR_MESSAGE);
    }
};

await read();