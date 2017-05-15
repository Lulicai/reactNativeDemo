/**
 * Created by admin on 2017/5/5.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    ScrollView
} from 'react-native';

import { TabNavigator,StackNavigator } from 'react-navigation';

const MyNavScreen = ({ navigation, banner }) => (
    <ScrollView>
        <Button
            onPress={() => navigation.navigate('Profile', { name: 'Jordan' })}
            title="Go to a profile screen"
        />
        <Button
            onPress={() => navigation.navigate('NotifSettings')}
            title="Go to notification settings"
        />
    </ScrollView>
);

const MyNotificationsSettingsScreen = ({ navigation }) => (
    <MyNavScreen
        banner="Notification Settings"
        navigation={navigation}
    />
);

const MySettingsScreen = ({ navigation }) => (
    <MyNavScreen
        banner="Settings"
        navigation={navigation}
    />
)

const MyHomeScreen = ({ navigation }) => (
    <MyNavScreen
        banner="Home Screen"
        navigation={navigation}
    />
);
const MyProfileScreen = ({ navigation }) => (
    <MyNavScreen
        banner={`${navigation.state.params.name}s Profile`}
        navigation={navigation}
    />
);
MyProfileScreen.navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name}'s Profile!`,
});

const MainTab = StackNavigator({
    Home: {
        screen: MyHomeScreen,
        path: '/',
        navigationOptions: {
            title: 'Welcome',
        },
    },
    Profile: {
        screen: MyProfileScreen,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.name}'s Profile!`,
        }),
    },
})


const SettingsTab = StackNavigator({
    Settings: {
        screen: MySettingsScreen,
        path: '/',
        navigationOptions: () => ({
            title: 'Settings',
        }),
    },
    NotifSettings: {
        screen: MyNotificationsSettingsScreen,
        navigationOptions: {
            title: 'Notification Settings',
        },
    },
});


const AppProject = TabNavigator({
    MainTab: { screen: MainTab },
    SettingsTab: { screen: SettingsTab },
});

export default AppProject