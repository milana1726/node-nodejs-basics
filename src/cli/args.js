const prefix = '--';

const parseArgs = () => {
    const argsArr = process.argv.slice(2);
    const argsStr = argsArr.reduce((acc, arg, index, arr) => {
        if (arg.startsWith(prefix)) {
            const valueStr = `${arg.replace(prefix, '')} is ${arr[index + 1]}`;
            return [...acc, valueStr];
        }
        return acc;
    }, [])
    .join(', ');

    console.log(argsStr);
};

parseArgs();