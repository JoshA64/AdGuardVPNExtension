import credentials from './credentials';
import appStatus from './appStatus';
import log from '../lib/logger';

const updatePermissions = async () => {
    await credentials.getVpnTokenRemote();
    await credentials.gainVpnCredentials(true);
    // if no error, clear permissionError
    appStatus.setPermissionsError(null);
    log.info('Permissions were updated successfully');
};

const updatePermissionsErrorHandler = (error) => {
    log.error('Permissions were not updated due to:', error.message);
    appStatus.setPermissionsError(error);
};

const scheduler = (periodicFunction, errorHandler) => {
    const TIME_CHECK_INTERVAL_MS = 5 * 1000; // 5 sec
    const RUN_INTERVAL_MS = 30 * 60 * 1000; // 30 minutes

    let prevCheck = Date.now();

    setInterval(async () => {
        const currTime = Date.now();
        if (currTime >= prevCheck + RUN_INTERVAL_MS) {
            try {
                await periodicFunction();
            } catch (e) {
                errorHandler(e);
            }
            prevCheck += RUN_INTERVAL_MS;
        }
    }, TIME_CHECK_INTERVAL_MS);
};

const init = () => {
    log.info('Permissions updater was initiated');
    scheduler(updatePermissions, updatePermissionsErrorHandler);
};

const permissionsUpdater = {
    init,
};

export default permissionsUpdater;
