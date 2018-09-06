// @flow
export * from './functions';

import { getDisplayName, getSpaceUsage } from './functions';

const logger = require('jitsi-meet-logger').getLogger(__filename);

/**
 * Fetches information about the user's dropbox account.
 *
 * @param {string} token - The dropbox access token.
 * @param {string} clientId - The Jitsi Recorder dropbox app ID.
 * @returns {Promise<Object|undefined>}
 */
export function getDropboxData(
        token: string,
        clientId: string
): Promise<?Object> {
    return Promise.all(
        [ getDisplayName(token, clientId), getSpaceUsage(token, clientId) ]
    ).then(([ userName, space ]) => {
        const { allocated, used } = space;

        return {
            userName,
            spaceLeft: Math.floor((allocated - used) / 1048576)// 1MiB=1048576B
        };

    }, error => {
        logger.error(error);

        return undefined;
    });
}