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
    StyleSheet
} from 'react-native';

import TabController from './TabController';
var Dimensions = require('Dimensions');

export default class AppDelegate extends Component {
    render() {
        return (
            <TabController/>
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