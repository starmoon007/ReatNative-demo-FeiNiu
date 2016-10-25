/**
 * Created by null on 16/8/25.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';

import NavigationBar from '../../Basic/NavigationBar';
var Dimensions = require('Dimensions');


export default class HomeNaviBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            titleViewLeft: 0,
            titleViewRight:0
        }
    };

    __clickCity = ()=>{
        this.props.onPressCity && this.props.onPressCity();
        
    };



    __clickMessage = ()=>{
        this.props.onPressMessage && this.props.onPressMessage();
    };

    __clickSearch = ()=>{
        this.props.onPressSearch && this.props.onPressSearch();
    };

    __clickVoice = ()=>{
        this.props.onPressVoice && this.props.onPressVoice();
    };


    __renderNaviLeftView = ()=>{
        return(
            <TouchableOpacity
                onPress={()=>this.__clickCity()}
            >
                <View style={{flexDirection :'row',alignItems:'center'}}>
                    <Text style={{color:'white'}}>
                        城市
                    </Text>
                    <Image source={{uri : 'downArrow'}}
                           style={{width: 20,height:20}}
                    />
                </View>
            </TouchableOpacity>
        );
    };

    __renderNaviRightView = ()=>{
        return(
            <TouchableOpacity
                onPress={()=>this.__clickMessage()}
            >
                <Image source={{uri : 'message'}}
                       style={{width: 20,height:20}}
                />
            </TouchableOpacity>
        );
    };

    __renderNaviMiddleView = ()=>{
        var titleWidth = this.state.titleViewRight - this.state.titleViewLeft;
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
                        文具49元任性三件
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
                    renderLeftView = {()=>this.__renderNaviLeftView()}
                    renderRightView = {()=>this.__renderNaviRightView()}
                    renderTitleView = {()=>this.__renderNaviMiddleView()}
                    showBottomLine = {false}
                >

            </NavigationBar>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    navigatorBarTitleViewStyle: {
        flexDirection :'row',
        height: 30,
        backgroundColor:'rgba(255,255,255,0.8)',
        justifyContent:'space-between',
        alignItems: 'center',
        borderRadius:5,
        overflow: 'hidden',
        flex:1,
        marginLeft:70,
        marginRight:46
    },
    leftViewStyle: {

    }
});


HomeNaviBar.propTypes = {
    onPressCity: React.PropTypes.func,
    onPressMessage: React.PropTypes.func,
    onPressSearch: React.PropTypes.func,
    onPressVoice :  React.PropTypes.func,
};
