/**
 * Created by young on 16/8/18.
 */
'use strict';
import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Platform,
    TouchableOpacity
} from 'react-native';
var Dimensions = require('Dimensions');
var PixelRatio = require('PixelRatio');

export default class NavigationBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            leftViewHeight: 0,
            rightViewHeight:0
        }
    };



    render() {
        return (
            <View style={styles.backgroundView}>
                <View style={styles.navigationBarViewStyle}>
                    <View style={[styles.leftView,{top:22-(this.state.leftViewHeight)*0.5}]}
                          onLayout={(obj)=>this.__leftViewLayout(obj)}
                    >
                        {this.renderLeftPart()}
                    </View>
                    {this.renderMiddlePart()}
                    <View style={[styles.rightView,{top:22-(this.state.rightViewHeight)*0.5}]}
                          onLayout={(obj)=>this.__rightViewLayout(obj)}
                    >
                        {this.renderRightPart()}
                    </View>
                </View>
                {this.renderBottomLine()}
            </View>
        );
    };

    renderLeftPart = ()=>{
        if(this.props.renderLeftView){
            return this.props.renderLeftView();
        }else if (this.props.leftViewTitle){
            if (this.props.onPressLeftView){
                return (
                    <TouchableOpacity
                        onPress={()=>this.props.onPressLeftView()}
                    >
                        <Text style={this.props.leftViewStyle}>
                            {this.props.leftViewTitle}
                        </Text>
                    </TouchableOpacity>
                );
            }else {
                return(
                    <Text style={this.props.leftViewStyle}>
                        {this.props.leftViewTitle}
                    </Text>);
                }
            }

        return null;
    };

    renderMiddlePart = ()=>{
        if (this.props.renderTitleView){
            return this.props.renderTitleView();
        }else if (this.props.title){
            if (this.props.onPressTitleView){
                return (
                    <TouchableOpacity
                        onPress={()=>this.props.onPressTitleView()}
                    >
                        <Text style={this.props.titleStyle}>
                            {this.props.title}
                        </Text>
                    </TouchableOpacity>
                );
            }else {
                return (
                    <Text style={this.props.titleStyle}>
                        {this.props.title}
                    </Text>
                );
            }
        }
        return null;
    };

    renderRightPart = ()=>{
        if (this.props.renderRightView){
            return this.props.renderRightView();
        }else if (this.props.rightViewTitle){
            if (this.props.onPressRightView){
                return (
                    <TouchableOpacity
                        onPress={()=>this.props.onPressRightView()}
                    >
                        <Text style={this.props.rightViewStyle}>
                            {this.props.rightViewTitle}
                        </Text>
                    </TouchableOpacity>
                );
            }else {
                return (
                    <Text style={this.props.rightViewStyle}>
                        {this.props.rightViewTitle}
                    </Text>
                );
            }
            
        }
        return null;
    };

    renderBottomLine = ()=>{
        if (this.props.showBottomLine == false){
            return null;
        }
        return (
            <View style={styles.bottomLineStyle}>

            </View>
        );
    };

    __leftViewLayout = (obj)=>{
        this.setState({
            leftViewHeight:obj.nativeEvent.layout.height
        });
    };
    __rightViewLayout = (obj)=>{
        this.setState({
            rightViewHeight:obj.nativeEvent.layout.height
        });
    };
};

const styles = StyleSheet.create({
    backgroundView: {
        height:Platform.OS === 'an droid' ? 44 : 64,
        width:Dimensions.get('window').width,
        justifyContent: 'flex-end',
    },
    navigationBarViewStyle: {
        flexDirection :'row',
        height: 44,
        width:Dimensions.get('window').width,
        alignItems:'center',
        justifyContent: 'center',
        position:'relative',
    },
    leftView: {
        position:'absolute',
        left:15,

    },
    rightView: {
        position:'absolute',
        right:15
    },
    leftViewDefaultStyle: {

    },
    titleDefaultStyle: {
        fontSize: 22,
    },
    rightViewDefaultStyle: {

    },
    bottomLineStyle: {
        width : Dimensions.get('window').width,
        height : 1/PixelRatio.get() ,
        backgroundColor : 'rgb(240,240,240)'
    }
});


NavigationBar.propTypes = {

    // 左边按钮
    leftViewTitle : React.PropTypes.string,
    leftViewStyle : Text.propTypes.style,
    renderLeftView : React.PropTypes.func,
    onPressLeftView : React.PropTypes.func,

    // 右边按钮
    rightViewTitle : React.PropTypes.string,
    rightViewStyle : Text.propTypes.style,
    renderRightView : React.PropTypes.func,
    onPressRightView : React.PropTypes.func,

    // 中间视图
    title : React.PropTypes.string,
    titleStyle : Text.propTypes.style,
    renderTitleView : React.PropTypes.func,
    onPressTitleView : React.PropTypes.func,

    // 底部分割线
    showBottomLine: React.PropTypes.bool
};

NavigationBar.defaultProps= {
    // 左边视图
    leftViewTitle: '',
    leftViewStyle: styles.leftViewDefaultStyle,

    // 中间视图
    title: '',
    titleStyle: styles.titleDefaultStyle,

    // 右边视图
    rightViewTitle : '',
    rightViewStyle:styles.rightViewDefaultStyle,

    showBottomLine:true
};