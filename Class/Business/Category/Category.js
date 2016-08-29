/**
 * Created by young on 16/8/17.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import  CategoryNaviBar from './CategoryNaviBar';

export default class Category extends Component {

    __onPressSearch = ()=>{
        alert('点击了搜索按钮');
    };

    __onPressVoice = ()=>{
        alert('点击了语音按钮');
    };

    
    render() {
        return (
            <View>
                <CategoryNaviBar
                    onPressSearch = {()=>this.__onPressSearch()}
                    onPressVoice = {()=>this.__onPressVoice()}
                />
                <Text>
                    商品分类
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