/**
 * Created by young on 16/8/17.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import NavigationBar from '../../Basic/NavigationBar';

export default class ShoppingCart extends Component {

    render() {
        return (
            <View>
                <NavigationBar
                    title={'购物车'}
                    titleStyle = {{fontSize:16}}
                >

                </NavigationBar>
                <Text>
                    购物车
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