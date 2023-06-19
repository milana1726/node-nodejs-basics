import path from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';
import { cpus } from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workerPath = path.join(__dirname, 'worker.js');

const performCalculations = async () => {
    let promises = [];

    for (let i = 0; i < cpus().length; i++) {
        const res = new Promise((resolve, reject) => {
            const worker = new Worker(workerPath, { workerData: i + 10 });

            worker.on('message', (data) => resolve({ status: 'resolved', data: data }));
            worker.on('error', () => resolve({ status: 'error', data: null }));
        });

        promises.push(res);
    }

    Promise.all(promises).then((data) => console.log(data));
};

await performCalculations();