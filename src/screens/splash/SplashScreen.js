import React from "react";

import {
    StyleSheet,
    View,
    Image,
    Text
} from "react-native";

export default class SplashScreen extends React.Component {
    constructor(props) {
        super(props);
        setInterval(() => {
            props.navigation.navigate("LogIn")
        }, 1000)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.image}
                        source={require("../../assets/images/logo.png")}
                        resizeMode="contain" />
                </View>
                <Text>Wellcome To Splash Screen</Text>
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


