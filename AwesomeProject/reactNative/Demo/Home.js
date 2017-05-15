/**
 * Created by admin on 2017/5/14.
 */

import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Image
} from 'react-native';


class Home extends React.Component{

    static navigationOptions={
        title: '首页',//设置标题内容
        headerBackTitle:' '
    }

    constructor(props) {
        super(props);
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={{padding:10}}>Hello, Navigation!</Text>
                <Button
                    onPress={() => navigate('Chat',{user:'lily'})}
                    title="点击跳转"/>
            </View>
        )
    }
}


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

export default Home