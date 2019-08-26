import React from "react";
import {
    StyleSheet,
    View,
    Text
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {signUpUser} from '../../apis/userApis/UserApis'

class SignUp extends React.Component {

  constructor(props) {
        super(props);

    }
    componentDidMount () {
        let userObj = {
            firstName: 'shah',
            lastName: 'zaib'
        }
        this.props.signUpUser(userObj)
    }
    render() {

        return (
            <View style={{ flex: 1 }}>
                <Text>SignUp Screen</Text>
            </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ signUpUser }, dispatch);
  }

  export default connect(
    null,
    mapDispatchToProps
  )(SignUp);



