import React, {Component} from 'react';
import {Platform, TextInput, ScrollView} from 'react-native';
import { Navigation } from 'react-native-navigation';

const initialState = {
};

type State = Readonly<typeof initialState>;
type Props = {componentId: string}

class EditPerson extends Component<Props, State> {
    private formData: Record<string, any>;

    constructor(props: Props) {
        super(props);
        this.formData = {};
        this.state = initialState;
    }

    componentDidMount() {
        Navigation.events().bindComponent(this);
        Navigation.mergeOptions(this.props.componentId, {
            topBar: {
                visible: true,
                title: {
                    text: "title"
                },
                subtitle: {
                    text: "subtitle",
                    fontSize: 13,
                },
                leftButtons: [
                    {
                        id: 'cancel',
                        text:  'cancel',
                        icon: undefined,
                    }
                ]
            },
            bottomTabs: {
                visible: false
            }
        });
    }

    render() {
        return (
            <ScrollView
                enableOnAndroid={Platform.Version < 30}
                keyboardShouldPersistTaps="handled"
            >
                <TextInput
                    style={{backgroundColor: "white"}}
                    textAlignVertical="top"
                    scrollEnabled={false}
                    hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                    // value={"value"}
                    clearButtonMode="while-editing"
                    placeholder={"placeholder"}
                />
            </ScrollView>
        );
    }

    navigationButtonPressed({ buttonId }: { buttonId: string }) {
        if (buttonId === 'cancel') {
            Navigation.pop(this.props.componentId);
        }
    }
}


export default EditPerson;
