import path from 'path';
import { fileURLToPath } from 'url';
import { readdir } from 'fs/promises';
import { ERROR_MESSAGE } from '../constants/constants.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const folderPath = path.join(__dirname, 'files');

const list = async () => {
    try {
        const filesList = await readdir(folderPath);
        console.log('Files:', filesList);
    } catch {
        throw new Error(ERROR_MESSAGE);
    }
};

await list();