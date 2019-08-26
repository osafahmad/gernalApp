import React from "react";

import {
    StyleSheet,
    View,
    Text,
    Button
} from "react-native";

class LogIn extends React.Component {

    constructor(props) {
        super(props);

    }
    navigatetosignUp = () => {
        console.log('>>', this.props)
        this.props.navigation.navigate("SignUp");
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>Log In Screen</Text>
                <Button onPress={this.navigatetosignUp} title="Navigate to signUp" />
            </View>
        );
    }
}
export default LogIn



