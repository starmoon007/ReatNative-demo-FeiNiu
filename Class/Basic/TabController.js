/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Home from '../Business/Home/Home';
import Category from '../Business/Category/Category';
import Me from '../Business/ME/Me';
import ShoppingCart from '../Business/ShoppingCart/ShoppingCart';
import TeamBuy from '../Business/TeamBuy/TeamBuy';

export default class TabController extends Component {

  constructor(props) {
    super(props);

    this.state = {
        selectedTab: 'home'
    }
  };

  renderTabBarItem(title,icson,selectedIcon,selectedTab,componentName,component,badgeText){
      return(
          <TabNavigator.Item
              title = {title}
              renderIcon={() => <Image source={{uri : icson}} style={styles.iconStyle} />}
              renderSelectedIcon={() => <Image source={{uri : selectedIcon}} style={styles.selectedIcsonStyle} />}
              onPress={()=>{this.setState({selectedTab : selectedTab})}}
              selected={this.state.selectedTab === selectedTab}
              titleStyle={styles.titleStyle}
              selectedTitleStyle={styles.selectedTitleStyle}
              renderBadge = {()=>this.__renderBadge(badgeText)}
          >
              <Navigator
                  initialRoute = {{name:componentName, component:component}}
                  configureScene={()=>{
                        return Navigator.SceneConfigs.PushFromRight;
                  }}
                  renderScene = {(route,navigator)=>{
                        let Component = route.component;
                        return <Component {...route.passProps} navigator={navigator}/>;
                  }}
              >

              </Navigator>
          </TabNavigator.Item>
      );
  };

  __renderBadge = (badgeText)=>{
      var badgeNumber = parseInt(badgeText);
      if (badgeNumber == 0){
          return (
              <View/>
          );
      }
      return (
          <View style={styles.renderBadgeStyle}>
            <Text style={styles.renderBadgeTextStyle}>
                {badgeText}
            </Text>
          </View>
      );
  };

  render(){
    return (
        <TabNavigator>
            {this.renderTabBarItem('首页','tabHomeU','tabHome','home','首页',Home,'0')}
            {this.renderTabBarItem('商品分类','tabCU','tabC','category','商品分类',Category,'0')}
            {this.renderTabBarItem('拼团','tabP','tabP','teamBuy','拼团',TeamBuy,'0')}
            {this.renderTabBarItem('购物车','tabSU','tabS','shoppingCart','购物车',ShoppingCart,'0')}
            {this.renderTabBarItem('我的飞牛','tabMeU','tabMe','me','我的飞牛',Me,'0')}
        </TabNavigator>
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
  iconStyle: {
      width:30,
      height:30
  },
  selectedIcsonStyle: {
      width:30,
      height:30,
  },
  titleStyle: {
      color : '#787878'
  },
  selectedTitleStyle: {
      color : '#cc1260',

  },
  renderBadgeStyle: {
      alignItems: 'center',
      marginTop: 3,

  },
  renderBadgeTextStyle: {
      color: 'white',
      backgroundColor:'red',
      fontSize: 10,
      borderRadius : 6,
      paddingLeft: 3,
      paddingRight: 3,
      overflow: 'hidden'
  }
});

