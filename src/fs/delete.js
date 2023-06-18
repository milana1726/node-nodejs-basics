import path from 'path';
import { fileURLToPath } from 'url';
import { rm } from 'fs/promises';
import { ERROR_MESSAGE } from '../constants.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'fileToRemove.txt' );

const remove = async () => {
    try {
        await rm(filePath);
        console.log('File deleted successfully!')
    } catch {
        throw new Error(ERROR_MESSAGE);
    }
};

await remove();