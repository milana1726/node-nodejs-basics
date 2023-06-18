import { cp } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { existsAsync } from '../utils/existsAsync.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sourceFolderPath = path.join(__dirname, 'files');
const copyFolderPath = path.join(__dirname, 'files_copy');

const copy = async () => {
    if (!(await existsAsync(sourceFolderPath)) || await existsAsync(copyFolderPath)) {
        throw new Error('FS operation failed');
    } else {
        await cp(sourceFolderPath, copyFolderPath, { recursive: true });
        console.log('Copy created successfully!')
    };
};

await copy();
