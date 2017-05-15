/**
 * Created by admin on 2017/5/5.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';


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

const App = StackNavigator({
    Home: { screen: HomeScreen },
    Chat: { screen: ChatScreen },
});

export {App,ChatScreen}