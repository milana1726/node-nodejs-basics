import path from 'path';
import { fileURLToPath } from 'url';
import { fork } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const scriptPath = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    const childProcess = fork(scriptPath, args, { silent: true });

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess(['Hello', 'world', '!!!']);
