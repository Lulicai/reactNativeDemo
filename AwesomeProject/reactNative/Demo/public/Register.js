/**
 * Created by admin on 2017/5/14.
 */

import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Image,
    StatusBar,
    Dimensions,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert
} from 'react-native';
//有一个入口判断是用户已经登陆了还是没有登陆，没有登陆出现登陆（带有注册的路由），
//有登陆的话就跳到首页
import {
    StackNavigator,
    TabNavigator
} from 'react-navigation';

import InputCheck from '../../../public/InputCheck';
import SimpleApp from '../HomePage'

var {width,height} = Dimensions.get('window');

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            sendTitle:'获取验证码',
            countDown:0,
            phone:'',
            password:'',
            validateCode:'',
            tryTime: 0,
            sendType: 'sms',
        }
        this.register = this.register.bind(this)
        this.checkInput = this.checkInput.bind(this);
        //this.getVerifyCode = this.getVerifyCode.bind(this);
        this.interNal = this.interNal.bind(this);
    }

    onInputFocus(type, isFocus) {
        var distance = 0;
        switch (type) {
            case "password":
                distance = 0
                break;
            case "invite":
                distance = 0;
                break;
            default:
                distance = 40;
        }
        var moveDistance = 0;
        if (isFocus) {
            moveDistance = distance;
        }
        this.refs.scrollView.scrollTo({y: moveDistance});
    }

    checkInput() {
        if (!InputCheck.check('notNull', this.state.phone)) {
            Alert.alert(null, '手机号码不能为空哦',[{text: '确定',onPress: ()=>{return ;}}]);
            return null;
        }
        if (!InputCheck.check('phoneNo', this.state.phone)) {
            Alert.alert(null, '请填写正确手机号码', [{text: '确定',onPress: ()=>{return ;}}]);
            return null;
        }
        if (!InputCheck.check('notNull', this.state.password)) {
            Alert.alert(null, '密码不能为空哦', [{text: '确定',onPress: ()=>{return ;}}]);
            return null;
        }
        if (!InputCheck.check('lengthBetween', this.state.password, [6, 18])) {
            Alert.alert(null, '密码需要6-18位', [{text: '确定',onPress: ()=>{return ;}}]);
            return null;
        }
        if (!InputCheck.check('notNull', this.state.validateCode)) {
            Alert.alert(null, '验证码不能为空哦', [{text: '确定',onPress: ()=>{return ;}}]);
            return null;
        }
        if (!InputCheck.check('lengthLess', this.state.validateCode, 4)) {
            Alert.alert(null, '验证码为四位数字', [{text: '确定',onPress: ()=>{return ;}}]);
            return null;
        }
        this.setState({inputComplete: 1});
    }

    interNal(){
        this.setState({countDown:60,tryTime:this.state.tryTime + 1},()=>{
            if (this.state.tryTime > 0 && this.state.tryTime < 2) {
                this.setState({sendTitle: '重新获取'});
            }
            if (this.state.tryTime >= 2) {
                this.setState({sendTitle: '语音获取', sendType: 'voice'});
            }
            var timer = setInterval(
                () => {
                    if (this.state.countDown > 0) {
                        this.setState({countDown: this.state.countDown - 1})
                    } else {
                        clearInterval(timer);
                    }
                },
                1000
            );
        })
    }

    getVerifyCode=()=>{
        if (!InputCheck.check('notNull', this.state.phone)) {
            Alert.alert(null, '请填写手机号码', [{text: '确定',onPress: ()=>{return ;}}]);
            return null;
        }
        if (!InputCheck.check('phoneNo', this.state.phone)) {
            Alert.alert(null, '请填写正确手机号码', [{text: '确定',onPress: ()=>{return ;}}]);
            return null;
        }
        //网络请求如果成功的话，
         this.interNal();

    }

    async register(){
        await this.checkInput();

        if (this.state.inputComplete !== 1) {
            return;
        }

        //网络请求上传数据，成功之后跳转到主页
        const { navigate } = this.props.navigation;

        navigate('SimpleApp')
    }

    render(){
        return(
            <ScrollView
                style={styles.container}
                ref={"scrollView"}
                automaticallyAdjustContentInsets={false}
            >
                <StatusBar hidden></StatusBar>
                <Image style={styles.container} source={require('../../../image/appBg.png')}>
                    <View style={styles.actionView}>
                        <View style={styles.btnView}>
                            <Image style={styles.image} source={require('../../../image/usr_icon.png')}/>
                            <TextInput
                                style={styles.inputView}
                                placeholder={"输入手机号码"}
                                placeholderTextColor={'#fff'}
                                underlineColorAndroid={'transparent'}
                                maxLength={11}
                                keyboardType={"numeric"}
                                selectionColor={'#fff'}
                                autoCapitalize={'none'}
                                onChangeText={(value) => (this.setState({phone: value}))}
                            />
                        </View>
                        <View style={styles.btnView}>
                            <Image style={styles.image} source={require('../../../image/usr_icon.png')}/>
                            <TextInput
                                style={styles.inputView}
                                placeholder={"输入密码"}
                                placeholderTextColor={'#fff'}
                                underlineColorAndroid={'transparent'}
                                keyboardType={"numeric"}
                                maxLength={18}
                                selectionColor={'#fff'}
                                autoCapitalize={'none'}
                                onChangeText={(value) => (this.setState({password: value}))}
                            />
                        </View>
                        <View style={[styles.btnView, {height: 40}]}>
                            <Image style={styles.image} source={require('../../../image/usr_icon.png')}/>
                            <TextInput
                                style={styles.inputView}
                                placeholder={"输入验证码"}
                                placeholderTextColor={'#fff'}
                                underlineColorAndroid={'transparent'}
                                maxLength={4}
                                keyboardType={"numeric"}
                                onBlur={()=>this.onInputFocus("invite", false)}
                                onFocus={()=>this.onInputFocus("invite", true)}
                                onChangeText={(value) => (this.setState({validateCode: value}))}/>
                            {this.state.countDown > 0 ?
                                <Text
                                    style={{
                                        fontSize: 15,
                                        color: "#49bed6",
                                        alignItems: "center",
                                        paddingLeft: 8
                                    }}>{this.state.countDown + "秒后重试"}</Text>
                                :
                                <TouchableOpacity onPress={this.getVerifyCode}>
                                    <Text
                                        style={{
                                            fontSize: 15,
                                            color: "#49bed6",
                                            alignItems: "center",
                                            paddingLeft: 8,
                                            paddingRight:8
                                        }}>{this.state.sendTitle}</Text>
                                </TouchableOpacity>
                            }
                        </View>
                        <TouchableOpacity onPress={this.register}>
                            <View style={styles.rigisterBtnStyle}>
                                <Text style={styles.buttonText}>注册</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </Image>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#fff'
    },
    icon: {
        height: 22,
        width: 22,
        resizeMode: 'contain'
    },
    main:{
        position:'absolute',
    },
    actionView: {
        flexDirection: 'column',
        flex: 1,
        paddingLeft: 18,
        paddingRight: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnView: {
        flexDirection: 'row',
        paddingLeft: 10,
        borderRadius: 8,
        height: height * 40 / 667.0,
        backgroundColor:'#666',
        opacity:0.2,
        marginTop:10,
        marginBottom:10,
        alignItems: 'center',
    },
    inputView:{
        color: 'white',
        fontSize: 17,
        flex: 1,
        width:'100%',

    },
    rigisterBtnStyle:{
        height:height * 40 / 667.0,
        width:width*0.9,
        backgroundColor:'transparent',
        marginTop:30,
        marginBottom:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
        borderWidth:1,
        borderColor:'#ccc',
        borderStyle:'solid',
        opacity:0.8
    },
    buttonText:{
        color:'white',
    },
    image:{
        width:20,
        height:30,
        marginRight:10
    }
});

const NewApp = StackNavigator({
    Home: { screen: Register },
    SimpleApp: { screen: SimpleApp },
});
export default NewApp;