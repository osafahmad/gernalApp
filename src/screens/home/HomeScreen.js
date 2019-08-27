import React from "react";

import {
    StyleSheet,
    View,
    Image,
    Text
} from "react-native";

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Home Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoContainer: {
        height: 70,
        width: 70
    },
    image: {
        height: 70,
        width: 70
    }
})


