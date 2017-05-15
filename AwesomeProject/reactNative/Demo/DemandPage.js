/**
 * Created by admin on 2017/5/10.
 */

import React,{Component} from 'react';

import {
    Button,
    Image,
    View,
    Text,
    StyleSheet
} from 'react-native'

import {
    StackNavigator
} from 'react-navigation';

import ChatScreen from './ChatScreen';
import NewDemand from './NewDemand'

const DemandPage  = ({ navigation })=>{

        console.log('----------------+++'+navigation.state.params);

        return (
            <View>
                <Text style={{padding:20}}>{'78979879'}</Text>
            </View>
        )
}

DemandPage.navigationOptions = props =>{
    const {navigation} = props;
    const {state, setParams,navigate} = navigation;
    const {params} = state;

    return {
        headerTitle: '需求',
        // Render a button on the right side of the header.
        // When pressed switches the screen to edit mode
        headerRight: (
            <Button
                title={'新建需求'}
                onPress={() => navigate('NewDemand',{passValue:(value)=> setParams({mode:'passed111112222 '+ value}),user:'jack'})}
            />
        ),
    };
}

export default DemandPage

