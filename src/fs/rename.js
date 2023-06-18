import path from 'path';
import { fileURLToPath } from 'url';
import { rename as renameFile } from 'fs/promises';
import { ERROR_MESSAGE } from '../constants/constants.js';
import { existsAsync } from '../utils/existsAsync.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sourceFilePath = path.join(__dirname, 'files', 'wrongFilename.txt');
const newFilePath = path.join(__dirname, 'files', 'properFilename.md' );

const rename = async () => {
    const sourceFileExists = await existsAsync(sourceFilePath);
    const newFileExists = await existsAsync(newFilePath);

    if (!sourceFileExists || newFileExists) {
        throw new Error(ERROR_MESSAGE);
    } else {
        await renameFile(sourceFilePath, newFilePath);
        console.log('File renamed successfully!');
    };
};

await rename();