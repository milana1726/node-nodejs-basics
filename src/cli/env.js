const prefix = 'RSS_';

const parseEnv = () => {
    const envArr = Object.entries(process.env);
    const envStr = envArr
        .filter(([key]) => key.startsWith(prefix))
        .map(([key, value]) => `${key}=${value}`)
        .join('; ');

    console.log(envStr);
};

parseEnv();