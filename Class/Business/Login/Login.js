/**
 * Created by null on 2016/10/24.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import NavigationBar from '../../Basic/NavigationBar';

export default class Login extends Component {

    dismissLoginVC = ()=>{
        this.props.navigator.pop();
    };
    
    render() {
        return (
            <View>
                <NavigationBar
                    title={'登录'}
                    titleStyle = {{fontSize:16}}
                    leftViewTitle = {'返回'}
                    onPressLeftView = {()=>this.dismissLoginVC()}
                />
                <Text>
                    {'登录页'}
                </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});