/**
 * Created by null on 16/8/28.
 */
/**
 * Created by young on 16/8/17.
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

export default class MeNaviBar extends Component {

    __onPressSetting =  ()=>{
        alert('点击了设置按钮');
    };

    __onPressMessage = ()=>{
        alert('点击了消息按钮');
    };

    __renderNaviRightView = ()=>{
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={()=>this.__onPressSetting()}
                >
                    <Text style={{color:'white'}}>
                        {'设置'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>this.__onPressMessage()}
                >
                    <Image source={{uri : 'message'}}
                           style={{width: 20,height:20,marginLeft:20}}
                    />
                </TouchableOpacity>
            </View>
        );
    };

    render() {
        return (
            <View {...this.props}>
                <NavigationBar
                    renderRightView = {()=>this.__renderNaviRightView()}
                />
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

MeNaviBar.propTypes = {
    onPressSetting: React.PropTypes.func,
    onPressMessage: React.PropTypes.func,
};