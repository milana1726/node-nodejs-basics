import path from 'path';
import { fileURLToPath } from 'url';
import { cp } from 'fs/promises';
import { ERROR_MESSAGE } from '../constants/constants.js';
import { existsAsync } from '../utils/existsAsync.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sourceFolderPath = path.join(__dirname, 'files');
const copyFolderPath = path.join(__dirname, 'files_copy');

const copy = async () => {
    const sourceFolderExists = await existsAsync(sourceFolderPath);
    const copyFolderExists = await existsAsync(copyFolderPath);

    if (!sourceFolderExists || copyFolderExists) {
        throw new Error(ERROR_MESSAGE);
    } else {
        await cp(sourceFolderPath, copyFolderPath, { recursive: true });
        console.log('Copy created successfully!')
    };
};

await copy();
