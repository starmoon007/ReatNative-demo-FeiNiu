/**
 * Created by young on 16/8/17.
 */

/*
*   应用入口...
*   模拟ios中AppDelegate
*   相关逻辑还待完善
*/
import React, { Component } from 'react';
import {
    StyleSheet,
    Navigator
} from 'react-native';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from '../Reducers/reducers';
import loginReducer from '../Reducers/reducers_login';

import TabController from './TabController';
var Dimensions = require('Dimensions');

export default class AppDelegate extends Component {
    render() {
        let initState = {loginState:{
                                        isLogin:true,
                                        logining:false
                                    },
                         userState:{}
        };
        let store = createStore(reducers,initState);
        return (
            <Provider store={store}>
                <Navigator
                    initialRoute = {{name:'TabController', component:TabController}}
                    configureScene={()=>{
                        return Navigator.SceneConfigs.FloatFromBottom;
                  }}
                    renderScene = {(route,navigator)=>{
                        let Component = route.component;
                        return <Component {...route.passProps} navigator={navigator}/>;
                  }}
                />
            </Provider>
        );
    }
};

const styles = StyleSheet.create({
    TabController: {
        flex: 1,
        height: Dimensions.get('window').height,
        width : Dimensions.get('window').width
    },
});