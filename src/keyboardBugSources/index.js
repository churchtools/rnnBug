import {Navigation} from 'react-native-navigation';
import {SCREEN_NAME_PREFIX, screenList} from './screenList';
import React from 'react';

export function registerScreens() {
    const registerScreen = (name, Screen) => {
        Navigation.registerComponent(
            SCREEN_NAME_PREFIX + name,
            () =>
                function NavigationComponentCreator({componentId, ...props}) {
                    return (
                        <Screen {...props} componentId={componentId}/>
                    )
                }
        );
    };

    Object.keys(screenList).forEach(screenName => registerScreen(screenName, screenList[screenName]));
}
