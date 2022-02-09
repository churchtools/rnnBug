import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import { Navigation } from 'react-native-navigation';

class PersonDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageOpen: false,
            permissionsForPerson: {},
            hasEmail: this.props.person ? !!this.props.person.email : false,
            isAuthInProgress: false,
            isAuthenticated: false
        };
    }

    componentDidMount() {
        Navigation.events().bindComponent(this);
        // this.reloadPerson();
        const topBar = {
            visible: true,
            title: {
                text: 'person.details.tabbarName'
            },
            backButton: {
                showTitle: false,
                popStackOnPress: false,
            },
            rightButtons: [{
                text: 'edit',
                id: 'edit',
            }]
        };
        const hardwareBackButton = {
            dismissModalOnPress: false,
            popStackOnPress: false
        };
        Navigation.mergeOptions(this.props.componentId, { topBar, hardwareBackButton });
    }

    render() {
            return (
                <ScrollView
                    style={{ backgroundColor: "#ff0000" }}
                >
                    <Text>Lorem Ipsum</Text>
                    <Text>Lorem Ipsum</Text>
                    <Text>Lorem Ipsum</Text>
                    <Text>Lorem Ipsum</Text>
                    <Text>Lorem Ipsum</Text>
                    <Text>Lorem Ipsum</Text>
                    <Text>Lorem Ipsum</Text>
                    <Text>Lorem Ipsum</Text>
                    <Text>Lorem Ipsum</Text>
                    <Text>Lorem Ipsum</Text>
                    <Text>Lorem Ipsum</Text>
                    <Text>Lorem Ipsum</Text>
                    <Text>Lorem Ipsum</Text>
                    <Text>Lorem Ipsum</Text>
                    <Text>Lorem Ipsum</Text>
                    <Text>Lorem Ipsum</Text>
                    <Text>Lorem Ipsum</Text>
                    <Text>Lorem Ipsum</Text>
                    <Text>Lorem Ipsum</Text>
                    <Text>Lorem Ipsum</Text>
                    <Text>Lorem Ipsum</Text>
                    <Text>Lorem Ipsum</Text>
                    <Text>Lorem Ipsum</Text>
                    <Text>Lorem Ipsum</Text>
                    <Text>Lorem Ipsum</Text>
                    <Text>Lorem Ipsum</Text>
                    <Text>Lorem Ipsum</Text>
                    <Text>Lorem Ipsum</Text>
                    <Text>Lorem Ipsum</Text>
                    <Text>Lorem Ipsum</Text>
                    <Text>Lorem Ipsum</Text>
                    <Text>Lorem Ipsum</Text>
                    <Text>Lorem Ipsum</Text>
                    <Text>Lorem Ipsum</Text>
                    <Text>Lorem Ipsum</Text>
                    <Text>Lorem Ipsum</Text>
                </ScrollView>
            );
    }

    navigationButtonPressed({ buttonId }) {
        if (buttonId === 'edit') {
            const component = {
                name: `churchtoolsmobile.EditPerson`,
                passProps: {},
                options: {
                    bottomTabs: {
                        visible: false,
                        animate: true
                    }
                }
            };
            Navigation.push(this.props.componentId, {
                component
            });
        } else if (buttonId === 'RNN.back' || buttonId === 'RNN.hardwareBackButton') {
            this.goBack();
        }
    }

    goBack() {
            return Navigation.pop(this.props.componentId);
    }
}

export default PersonDetails;
