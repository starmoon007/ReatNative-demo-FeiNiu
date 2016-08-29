/**
 * Created by null on 16/8/28.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import NavigationBar from '../../Basic/NavigationBar';
var Dimensions = require('Dimensions');
var PixelRatio = require('PixelRatio');

export default class CategoryNaviBar extends Component {

    __clickSearch = ()=>{
        this.props.onPressSearch && this.props.onPressSearch();
    };

    __clickVoice = ()=>{
        this.props.onPressVoice && this.props.onPressVoice();
    };
    
    __renderTitleView = ()=>{
        return (
            <View style={styles.navigatorBarTitleViewStyle}>
                <TouchableOpacity
                    onPress={()=>this.__clickSearch()}
                >
                    <Image
                        source={require('../../../Image/search-navibar.png')}
                        style={{width:14,height:14,left: 10}}
                        resizeMode ='contain'
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1,height:30,marginLeft:20,marginRight:20,justifyContent:'center'}}
                                  onPress={()=>this.__clickSearch()}
                >
                    <Text style={{color:'gray'}}>
                        寻找称心的商品
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>this.__clickVoice()}
                >
                    <Image
                        source={require('../../../Image/mac-navibar.png')}
                        style={{width:14,height:14,right: 10}}
                        resizeMode ='contain'
                    />
                </TouchableOpacity>

            </View>
        );
    };

    render() {
        return (
            <View {...this.props}>
                <NavigationBar
                    renderTitleView = {()=>this.__renderTitleView()}
                />
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
    navigatorBarTitleViewStyle: {
        flexDirection :'row',
        height: 30,
        justifyContent:'space-between',
        alignItems: 'center',
        borderRadius:5,
        borderColor:'rgb(240,240,240)',
        overflow: 'hidden',
        flex:1,
        borderWidth:1/PixelRatio.get(),
        marginLeft:10,
        marginRight:10
    },
});

CategoryNaviBar.propTypes = {
    onPressSearch: React.PropTypes.func,
    onPressVoice :  React.PropTypes.func,
};
