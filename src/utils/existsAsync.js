import { access, constants } from 'fs/promises';

async function existsAsync(path) {
    try {
        await access(path, constants.F_OK);
        return true;
    } catch {
        return false;
    }
}

export { existsAsync };