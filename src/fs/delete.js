import { rm } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sourceFilePath = path.join(__dirname, 'files', 'fileToRemove.txt' );

const remove = async () => {
    try {
        await rm(sourceFilePath);
        console.log('File deleted successfully!')
    } catch {
        throw new Error('FS operation failed');
    }
};

await remove();