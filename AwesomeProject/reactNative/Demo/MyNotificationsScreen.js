/**
 * Created by admin on 2017/5/9.
 */

import React,{Component} from 'react';
import {
    Button,
    Image,
    View,
    Text,
    StyleSheet
} from 'react-native';

class MyNotificationsScreen extends Component{
    static navigationOptions = {
        title:'通知',
        drawerlabel:'通知',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../../image/city.png')}
                style={[styles.tabIcon, {tintColor: tintColor}]}
            />
        ),

    }
    render(){
        return(
            <View style={{backgroundColor:'#fff'}}>
                <Button
                    style={{padding:20}}
                    onPress={() => this.props.navigation.navigate('DrawerOpen')}
                    title="点击打开侧滑菜单"
                />
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="返回我的界面"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tabIcon: {
        width: 24,
        height: 24,
    },
});

export default MyNotificationsScreen;