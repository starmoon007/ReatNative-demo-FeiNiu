/**
 * Created by young on 16/8/17.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import MeNaviBar from './MeNaviBar'

export default class Me extends Component {

    render() {
        return (
            <View >
                <MeNaviBar
                    style={styles.naviBarStyle}
                />
                <Text>
                    我的
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
    naviBarStyle: {
        backgroundColor: '#cc1260',
    }
});