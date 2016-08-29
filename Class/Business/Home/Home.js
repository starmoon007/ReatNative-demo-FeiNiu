/**
 * Created by young on 16/8/17.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';

import HomeNaviBar from './HomeNaviBar';

export default class Home extends Component {

    __onPressCity = ()=>{
        alert('点击了城市按钮');
    };

    __onPressMessage = ()=>{
        alert('点击了消息按钮');
    };

    __onPressSearch = ()=>{
        alert('点击了搜索按钮');
    };

    __onPressVoice = ()=>{
        alert('点击了语音按钮');
    };

    render() {
        return (
            <View>
                <HomeNaviBar style={styles.navigatorBar}
                             onPressCity = {()=>this.__onPressCity()}
                             onPressMessage = {()=>this.__onPressMessage()}
                             onPressSearch = {()=>this.__onPressSearch()}
                             onPressVoice = {()=>this.__onPressVoice()}
                             
                >

                </HomeNaviBar>
                
            </View>
        )

    }
}

const styles = StyleSheet.create({
    navigatorBar : {
        backgroundColor: '#cc1260',
    },
    
});