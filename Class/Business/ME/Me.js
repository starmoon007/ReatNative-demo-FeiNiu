/**
 * Created by young on 16/8/17.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import { connect,Provider } from 'react-redux'
import {loginAction } from '../../Action/action'

import MeNaviBar from './MeNaviBar';
import Login from '../Login/Login';

export default class Me extends Component {
    
    render() {
        const { dispatch,loginState} = this.props;
        // alert(loginState.isLogin);
        return (
            <View >
                <MeNaviBar
                    style={styles.naviBarStyle}
                />
                <Text>
                    我的
                </Text>
                
                <TouchableOpacity onPress={()=>{dispatch(loginAction())}}>
                    <Text>
                        {loginState.logining ? '登录中' : '登录'}
                    </Text>
                </TouchableOpacity>
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
    naviBarStyle: {
        backgroundColor: '#cc1260',
    }
});

//selector：这是你自己编写的一个函数。这个函数声明了你的组件需要整个 store 中的哪一部分数据作为自己的 props。
function selector(state) {
    return {
        loginState : state.loginState
    }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(selector)(App) 中；
export default connect(selector)(Me);