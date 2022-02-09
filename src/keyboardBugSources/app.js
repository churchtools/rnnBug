import {Component} from 'react';
import {registerScreens} from './index';
import {Navigation} from 'react-native-navigation';

registerScreens();

function startLoggedInNavigation() {
    console.log('######### startLoggedInNavigation');

    const basicConfig = {
        topBar: {
            visible: true,
            title: {},
            drawBehind: false,
            noBorder: false
        },
        statusBar: {
            visible: true,
            drawBehind: false,
            backgroundColor: 'white',
            style: 'dark'
        },
        bottomTab: {
        },
        bottomTabs: {
            titleDisplayMode: 'alwaysShow'
        },
        layout: {
            orientation: ['portrait']
        },
        navigationBar: {
        }
    };


    Navigation.setDefaultOptions(basicConfig);
    const children = [];
    children.push({
            stack: {
                children: [
                    {
                        component: {
                            name: 'churchtoolsmobile.PersonDetails',
                            options: {
                                bottomTab: {
                                    text: 'start',
                                },
                                topBar: {
                                    title: {
                                        text: 'start',
                                        fontSize: 20
                                    }
                                }
                            },
                        }
                    }
                ]
            }
        },
    );

    Navigation.setRoot({
        root: {
            bottomTabs: {
                children,
                options: {
                    bottomTabs: {
                        currentTabIndex: 0
                    }
                }
            }
        }
    });
}

export default class App extends Component {
    constructor(props) {
        super(props);
        startLoggedInNavigation(false);
        Navigation.events().registerAppLaunchedListener(() => {
            console.log('Navigation.event: app launched!');
        });
    }
}
