import path from 'path';
import { fileURLToPath } from 'url';
import { writeFile } from 'fs/promises';
import { ERROR_MESSAGE } from '../constants/constants.js';
import { existsAsync } from '../utils/existsAsync.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
    const fileExists = await existsAsync(filePath);

    if (fileExists) {
        throw new Error(ERROR_MESSAGE);
    } else {
        await writeFile(filePath, 'I am fresh and young');
        console.log('File created successfully!')
    };
};

await create();