const CURRENT_LEVEL = 'DEBUG';

const LEVELS = {
    ERROR: 1,
    WARN: 2,
    INFO: 3,
    DEBUG: 4,
};

const print = (level, method, args) => {
    // check log level
    if (LEVELS[CURRENT_LEVEL] < LEVELS[level]) {
        return;
    }
    if (!args || args.length === 0 || !args[0]) {
        return;
    }

    const now = new Date();
    const formatted = `${now.toISOString()}: ${args}`;
    // eslint-disable-next-line no-console
    console[method](formatted);
    if (method === LEVELS.ERROR) {
        throw new Error(formatted);
    }
};

const log = {
    debug(...args) {
        print('DEBUG', 'log', args);
    },

    info(...args) {
        print('INFO', 'info', args);
    },

    warn(...args) {
        print('WARN', 'info', args);
    },

    error(...args) {
        print('ERROR', 'error', args);
    },
};

export default log;
