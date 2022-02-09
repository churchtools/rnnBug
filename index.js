import { AppState } from 'react-native';
const wakeUpAppState = AppState.currentState;
console.log('Waking up... => ', wakeUpAppState);

import App from './src/keyboardBugSources/app';

let appInitialized = false;
const _handleAppStateChange = nextAppState => {
    if (nextAppState === 'active' && !appInitialized) {
        console.log('App has come to the foreground => start it!');
        appInitialized = true;
        AppState.removeEventListener('change', _handleAppStateChange);
        new App();
    }
};

if (!wakeUpAppState.match(/inactive|background/)) {
    // app is in foreground => launch the App!
    appInitialized = true;
    new App();
} else {
    // app is still in background => launched by a push notification
    AppState.addEventListener('change', _handleAppStateChange);
}
