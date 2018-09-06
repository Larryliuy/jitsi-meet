// @flow

import { createStyleSheet } from '../../../base/styles';

/**
 * The styles of the React {@code Components} of the feature recording.
 */
export default createStyleSheet({
    header: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    container: {
        flex: 0,
        flexDirection: 'column'
    },
    switch: {
        paddingRight: 10
    },
    loggedIn: {
        paddingBottom: 15
    },
    startRecordingText: {
        paddingBottom: 15
    }
});
