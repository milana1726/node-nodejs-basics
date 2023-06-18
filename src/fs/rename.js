import { rename as renameFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { existsAsync } from '../utils/existsAsync.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sourceFilePath = path.join(__dirname, 'files', 'wrongFilename.txt');
const newFilePath = path.join(__dirname, 'files', 'properFilename.md' );

const rename = async () => {
    const fileExists = await existsAsync(newFilePath);

    if (fileExists) {
        throw new Error('FS operation failed');
    } else {
        await renameFile(sourceFilePath, newFilePath);
        console.log('File renamed successfully!');
    };
};

await rename();