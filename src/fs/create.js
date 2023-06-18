import { writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { existsAsync } from '../utils/existsAsync.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
    const fileExists = await existsAsync(filePath);

    if (fileExists) {
        throw new Error('FS operation failed');
    } else {
        await writeFile(filePath, 'I am fresh and young');
        console.log('File created successfully!')
    };
};

await create();