import { Transform } from 'stream';

const reverseStr = (str) => str.split('').reverse().join('');

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, reverseStr(chunk.toString()));
        },
    });

    process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();