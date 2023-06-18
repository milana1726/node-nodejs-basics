import { pipeline } from 'stream/promises';
import { Transform } from 'stream';

const reverseStr = (str) => str.split('').reverse().join('');

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, reverseStr(chunk.toString()));
        },
    });

    await pipeline(process.stdin, transformStream, process.stdout);
};

await transform();