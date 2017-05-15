/**
 * Created by admin on 2017/5/8.
 */

import React from 'react';
import {
    Button,
    ScrollView,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import {StackNavigator, DrawerNavigator} from 'react-navigation';


class MyHomeScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../image/city.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        );
    }
}

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../image/city.png')}
                style={[styles.tabIcon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        this.props.navigation.navigate('DrawerOpen'); // open drawer
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}

class MyScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../image/city.png')}
                style={[styles.tabIcon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        this.props.navigation.navigate('DrawerOpen'); // open drawer
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

const MyApp = DrawerNavigator({
    Home: { screen: MyHomeScreen },
    Notifications: { screen: MyNotificationsScreen },
    MyScreen:{screen:MyScreen}
}, {
    drawerWidth: 250, // 抽屉宽
    drawerPosition: 'left', // 抽屉在左边还是右边
    // contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
    contentOptions: {
        initialRouteName: MyHomeScreen, // 默认页面组件
        activeTintColor: 'white',  // 选中文字颜色
        activeBackgroundColor: 'pink', // 选中背景颜色
        inactiveTintColor: '#666',  // 未选中文字颜色
        inactiveBackgroundColor: '#fff', // 未选中背景颜色
        style: {  // 样式

        }
    }
});

export default MyApp
