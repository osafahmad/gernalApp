import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView
} from "react-native";
import { Card } from "native-base";
import Button from "../../components/buttons/Button";
import { colors, metrics, fonts } from "../../styles";
import { signUpUser } from "../../apis/userApis/UserApis";

const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = "Required";
    }
    if (!values.lastName) {
        errors.lastName = "Required";
    }
    if (!values.email) {
        errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    }
    if (!values.password) {
        errors.password = "Required";
    } else if (values.password.length < 6) {
        errors.password = "Password lentgh must at least 6 characters"
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
            {touched &&
                ((error &&
                    error === "Password lentgh must at least 6 characters"
                    && <Text style={{ color: 'red' }}>{error}</Text>))}
        </View>
    );
};
const createUser = (values, dispatch) => {
    console.log('valsss', values)
    dispatch(signUpUser(values));
};

class SignUpScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.reset();
    }

    navigateToLogIn = () => {
        this.props.navigation.navigate("LogIn")
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
                                <Text style={styles.signUpText}>Sign Up</Text>
                            </View>
                            <Field
                                keyboardType="default"
                                label="First Name"
                                component={renderField}
                                name="firstName"
                                placeholder="Enter Your First Name"
                            />
                            <Field
                                keyboardType="default"
                                label="Last Name"
                                component={renderField}
                                name="lastName"
                                placeholder="Enter Your Last Name"
                            />
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
                                    <Button
                                        btnStyle={styles.btnStyle}
                                        title={"Create Account"}
                                        titleColor={"#ffff"}
                                        onPress={handleSubmit(createUser)} />
                                </View>
                                <View style={{ marginTop: metrics.smallMargin }}>
                                    <Button
                                        btnStyle={styles.btnStyle}
                                        title={"Already Have An Account"}
                                        titleColor={"#ffff"}
                                        onPress={this.navigateToLogIn} />
                                </View>
                            </View>

                        </Card>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const SignUpForm = reduxForm({
    form: "signUp", // a unique identifier for this form
    validate,
    createUser
})(SignUpScreen);

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ signUpUser }, dispatch);
}
export default connect(
    null,
    mapDispatchToProps
)(SignUpForm);

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
    signUpText: {
        fontWeight: fonts.fontWeight.bold,
        fontSize: fonts.size.large,
        color: colors.grey
    },
    textInput: {
        alignSelf: "stretch",
        borderBottomWidth: metrics.border.regularBorder,
        fontSize: fonts.size.regular,
        height: 40
    },
    buttonsContainer: {
        marginTop: metrics.smallMargin
    },
    btnStyle: {
        borderRadius: metrics.deviceWidth * 0.08,
        backgroundColor: colors.appBlue,
        width: metrics.deviceWidth * 0.8,
        height: metrics.deviceWidth * 0.10
    }
})
