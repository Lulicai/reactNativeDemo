/**
 * Created by admin on 2017/5/6.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    ScrollView,
    StyleSheet
} from 'react-native';

import Style from './AppProject2.style';
import { TabNavigator,StackNavigator } from 'react-navigation';


class HomeScreen extends Component{
    static navigationOptions = {
        title:'welcome'
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Hello, Navigation!</Text>
                <Button
                    onPress={() => navigate('Chat',{ user: 'Lily' })}
                    title={"asdasd"}
                >
                </Button>
            </View>
        )
    }
}

class ChatScreen extends Component{
    static navigationOptions=({navigation})=>({
        title:`chat with ${navigation.state.params.user}`
    })
    render(){
        const {params} = this.props.navigation.state;
        return(
            <View>
                <Text>Chat with {params.user}</Text>
            </View>
        )
    }
}


class PlanDetail extends Component {
    render(){
        return(
            <View>
                <Text>22222</Text>
            </View>
        )
    }
}

const MainScreenNavigator = TabNavigator({
    Home: {
        screen: HomeScreen,
    },
    Certificate: {
        screen: ChatScreen,
    },
});

const styles = StyleSheet.create({
    icon: {
        height: 22,
        width: 22,
        resizeMode: 'contain'
    }
});

const AppProject3 = StackNavigator({
    Main: {
        screen: MainScreenNavigator,
        navigationOptions: {
            header: {
                title: '互助',
                style: {
                    backgroundColor: '#fff'
                },
                backTitle: null
            }
        }
    },
    PlanDetail: {
        screen: PlanDetail,
        navigationOptions: {
            header: {
                style: {
                    backgroundColor: '#fff'
                },
            }
        }
    }
});

export default AppProject3