import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    ScrollView
} from "react-native";
import { Card } from "native-base";
import { colors, metrics, fonts } from "../../styles";

const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    }
    if (!values.password) {
        errors.password = "Required";
    }
    return errors;
};

const renderField = ({
    label,
    keyboardType,
    placeholder,
    secureTextEntry,
    meta: { touched, error },
    input: { onChange, ...restInput }
}) => {
    return (
        <View>
            <TextInput
                style={[styles.textInput, {
                    borderBottomColor: touched && error && colors.red || colors.grey,
                }]}
                keyboardType={keyboardType}
                placeholder={placeholder}
                placeholderTextColor="black"
                returnKeyType="next"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={onChange}
                secureTextEntry={secureTextEntry}
                {...restInput}
            />
            {/* {touched && ((error && <Text>{error}</Text>) || (warning && <Text>{warning}</Text>))} */}
        </View>
    );
};

const submitLogin = (values, dispatch) => {
    console.log('valsss', values)
    // dispatch(signIn(values));
};
class LogInScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.reset();
    }

    navigateToSignUp = () => {
        this.props.navigation.navigate("SignUp")
        // this.props.navigation.navigate("Home")
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <View style={styles.mainContainer}>
                {/* <StatusBar barStyle="light-content" backgroundColor={colors.appBlue} /> */}
                <ScrollView showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: 'center'
                    }}>
                    <View style={{
                        paddingHorizontal: metrics.smallPadding,
                    }}>
                        <Card style={styles.card}>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.loginText}>Log In</Text>
                            </View>
                            <Field
                                keyboardType="email-address"
                                label="Email*"
                                component={renderField}
                                name="email"
                                placeholder="Enter Your Email"

                            />
                            <Field
                                keyboardType="default"
                                label="Password*"
                                component={renderField}
                                name="password"
                                placeholder="Enter Your Password"
                                secureTextEntry={true}
                            />
                            <View style={styles.buttonsContainer}>
                                <View>
                                    <Button title="LogIn" onPress={handleSubmit(submitLogin)} />
                                </View>
                                <View style={{ marginTop: metrics.smallMargin }}>
                                    <Button title="Create Account" onPress={this.navigateToSignUp} />
                                </View>
                            </View>

                        </Card>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const LogInForm = reduxForm({
    form: "logIn", // a unique identifier for this form
    validate,
    submitLogin
})(LogInScreen);

export default connect(
    null,
    null
)(LogInForm);

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white,
    },
    card: {
        flex: 1,
        backgroundColor: colors.white,
        borderRadius: metrics.radius.regularRadius,
        paddingVertical: metrics.smallPadding,
        paddingHorizontal: metrics.basePadding,
        marginTop: metrics.smallMargin,
    },
    loginText: {
        fontWeight: fonts.fontWeight.bold,
        fontSize: fonts.size.large,
        color: colors.grey
    },
    textInput: {
        alignSelf: "stretch",
        borderBottomWidth: metrics.border.regularBorder,
        fontSize: fonts.size.regular
    },
    buttonsContainer: {
        marginTop: metrics.smallMargin
    }
})
