import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Image
} from 'react-native';

import {
    StackNavigator,
    TabNavigator
} from 'react-navigation';

import ChatScreen from './ChatScreen';
import MinePage from './MinePage';
import DemandPage from './DemandPage';
import NewDemand from './NewDemand';
import Home from './Home'


const MainScreenNavigator = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarlabel: '首页',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('../../image/city.png')}
                    style={[{tintColor: tintColor},styles.icon]}
                />
            ),
        }
    },
    Certificate: {
        screen: MinePage,
        navigationOptions: {
            tabBarlabel: '我的',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('../../image/city.png')}
                    style={[{tintColor: tintColor},styles.icon]}
                />
            ),
        }
    },
    DemandPage: {
        screen: DemandPage,
        navigationOptions: {
            tabBarlabel: '需求',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('../../image/city.png')}
                    style={[{tintColor: tintColor},styles.icon]}
                />
            ),
        }
    },
}, {
    animationEnabled: false, // 切换页面时不显示动画
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 禁止左右滑动
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#008AC9', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片默认颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
        style: {
            backgroundColor: '#fff', // TabBar 背景色
        },
        labelStyle: {
            fontSize: 12, // 文字大小
        },
    },
});

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff'
    },
    icon: {
        height: 22,
        width: 22,
        resizeMode: 'contain'
    }
});

const SimpleApp = StackNavigator({
    Home: {screen: MainScreenNavigator},
    Chat:{screen:ChatScreen},
    DemandPage: {screen: DemandPage},
    NewDemand:{screen:NewDemand},
});

export default SimpleApp;
