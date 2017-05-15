/**
 * Created by admin on 2017/5/6.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    ScrollView
} from 'react-native';

import Style from './AppProject2.style';
import { TabNavigator,StackNavigator } from 'react-navigation';

class HomeScreen extends Component{
    static navigationOptions={
        title:'主页'
    }

    componentWillMount() {
        this.getDataScores();
    }

    //parmas mark -- clickHandle
    onchange(){

    }

    //parmas mark -- getter
    
    getDataScores(){

    }

    getLocatStorng(){

    }

    // render methods

    renderView(){

        return(

            <View></View>
        )
    }


    render(){
        const { navigate } = this.props.navigation;
        return(
            <View>
                <Text style={{marginTop:20}}>主页</Text>
                <Button
                    onPress={()=>navigate('Profile',{user:'lucy'})}
                    title='chat with lucy'
                >
                </Button>
            </View>
        )
    }
}

class Chat extends Component{
    static navigationOptions={
        title:'主页'
    }
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View>
                <Text style={{marginTop:20}}>聊天</Text>
                <Button
                    onPress={()=>navigate('Profile',{user:'lily'})}
                    title='chat with lily'
                    style={{borderWidth:2, borderColor:'blue',borderStyle:'solid'}}>

                </Button>
            </View>
        )
    }
}

class MyProfileScreen extends Component{
    static navigationOptions = ({navigation}) => {
        const {state, setParams, navigate }= navigation;
        const isProfile = state.params.mode === 'Profile';
        const {user} = state.params;
        return{
            title:'二级页面',
            headerRight:<Button title={isProfile? `${state.params.user}'s chat`:'Done'}
                                onPress={() => setParams({ mode: isProfile ? 'MySpace' : 'Profile'})}/>,
            headerTintColor:'',//除右边按钮之外的字体颜色
            headerStyle:{backgroundColor:'skyblue'},
            headerTitleStyle:{color:'red'}
        }
    }
    render(){
        const {params} = this.props.navigation.state;
        return(
            <View>
                <Text style={{marginTop:20}}>{'chat with '+params.user}</Text>
            </View>
        )
    }
}

class MySpace extends Component{
    // static navigationOptions = ({navigation}) => {
    //     const {state, setParams, navigate }= navigation;
    //     const isProfile = state.params.mode === 'Profile';
    //     const {user} = state.params;
    //     return{
    //         title:'二级页面',
    //         headerRight:<Button title={isProfile? `${state.params.user}'s chat`:'Done'}
    //                             onPress={() => setParams({ mode: isProfile ? 'none' : 'Profile'})}/>
    //     }
    // }
    render(){
        const {params} = this.props.navigation.state;
        return(
            <View>
                <Text style={{marginTop:20}}>{'none'}</Text>
            </View>
        )
    }
}

const HomeTab = StackNavigator({
    Home: {
        screen: HomeScreen,
        path: '/',
        navigationOptions: {
            title: 'Welcome',
        },
    },
    Profile: {
        screen: MyProfileScreen,
    },
    MySpace:{
        screen:MySpace
    }
})

const SettingsTab = StackNavigator({
    chat: {
        screen: Chat,
        path: '/',
        navigationOptions: {
            title: 'settings',
        },
    },
    Profile: {
        screen:MyProfileScreen,
    },
    MySpace:{
        screen:MySpace
    }
})

const AppProject2  = TabNavigator(
    {
    HomeTab: { screen: HomeTab },
    SettingsTab: { screen: SettingsTab },
    },
    { headerMode: 'screen' }
)



export default AppProject2