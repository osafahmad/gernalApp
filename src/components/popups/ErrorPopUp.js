
import React, { Component } from "react";
import {
    Modal,
    Text,
    TouchableHighlight,
    View,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity
} from "react-native";
import { colors, metrics } from '../../styles';
export default savePopUp = (props) => {
    return (
        <View style={styles.container}>
            <Modal
                animationType={"fade"}
                transparent={true}
                visible={props.show}>
                <TouchableOpacity
                    style={styles.modal}
                    onPress={props.onClose}>
                    <View style={styles.modalContainer} >
                        <View style={{ flex: .5 }}>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>Error Will Be Here</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableHighlight
                                onPress={props.onClose} >
                                <Text >Ok</Text>
                            </TouchableHighlight>
                        </View >
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ede3f2"
    },
    modal: {
        backgroundColor: "rgba(154, 154, 154,0.5)",
        flex: 1,
        justifyContent: "center"
    },
    modalContainer: {
        margin: metrics.deviceWidth * 0.03,
        height: metrics.deviceHeight * 0.3,
        backgroundColor: "white",
        borderRadius: metrics.radius.mediumRadius
    }
});