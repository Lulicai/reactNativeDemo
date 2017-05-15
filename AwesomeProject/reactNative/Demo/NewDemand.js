/**
 * Created by admin on 2017/5/10.
 */

import React,{Component,PropTypes} from 'react';

import {
    Button,
    Image,
    View,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native'

import ChatScreen from './ChatScreen';

const propTypes = {
  user: PropTypes.string.isRequired,
};

class NewDemand extends Component{
    static navigationOptions = {
        title: '新建需求',
    };
    constructor(props){
        super(props)
    }

    callback(params){
        this.props.navigation.goBack();
        params.passValue('This is the value needs to pass front scene');
    }

    render(){
        const { params } = this.props.navigation.state;
        return (
            <ScrollView style={styles.container}>
                <View>
                    <Text onPress={()=>this.callback(params)}>{params.user}</Text>
                </View>
            </ScrollView>
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
// NewDemand.navigationOptions = props =>{
//     const {navigation} = props;
//     const {state, setParams,navigate} = navigation;
//     const {params} = state;
//     return {
//         headerTitle: '新建需求',
//         // Render a button on the right side of the header.
//         // When pressed switches the screen to edit mode.
//     };
//}

ChatScreen.propTypes = propTypes;


export default NewDemand