import React, { PureComponent } from "react"
import { View, TouchableWithoutFeedback, StyleSheet, Text } from "react-native"

import { colors, styles, metrics, fonts } from "../../styles"

export default button = props => {
    return (
        <TouchableWithoutFeedback
            disabled={props.disabled ? props.disabled : false}
            onPress={props.onPress}>
            <View style={[{
                justifyContent: 'center',
                alignItems: 'center'
            },
            props.btnStyle ? props.btnStyle : styleButton.btnStyle]}>
                <Text style={{
                    color: props.titleColor ? props.titleColor : colors.white,
                    fontSize: fonts.size.regular,
                    fontWeight: fonts.fontWeight.bold
                }}>{props.title}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styleButton = StyleSheet.create({
    btnStyle: {
        backgroundColor: colors.basicButtonColor,
        width: metrics.deviceWidth * 0.4,
        height: metrics.deviceWidth * 0.10,
        margin: metrics.tinyMargin,
        fontSize: fonts.size.regular
    }
})