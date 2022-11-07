// @ts-nocheck
import {
  ActivityIndicator,
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import React, {useState} from 'react';
import Checkbox from 'react-native-bouncy-checkbox';
import {LOG} from '../../../../../../logger.config';
import {Router} from '../../../../navigation/Router';
import styleLogin from './Style_Login';
import SafeKeyComponent from '../../../../components/safe_key/SafeKeyComponent';
const log = LOG.extend(`LOGIN_SCREEN.js`);
const Login = props => {
  const {navigation,isToken} = props;

  const [email, setEmail] = useState(`tester1@gmail.com`);
  // const [email, setEmail] = useState(`namok123@gmail.com`);
  const [password, setPassword] = useState(`111`);

  /* worker */
  
 

  const goToForgot = async () => {};
  const goToArticles = async () => {
    navigation.navigate(Router.HOME,{
      screen:"Home"
    })
  };
  return (
    <SafeKeyComponent>
      <View style={styleLogin.container}>
        {/* Header */}
        <View style={styleLogin.header}>
          <View style={styleLogin.leftHeader}>
            <View>
              <Text style={styleLogin.hello}>Hello</Text>
            </View>
            <View>
              <Text style={styleLogin.against}>Again!</Text>
            </View>
            <View>
              <Text style={styleLogin.welcome}>Welcome back you've</Text>
            </View>
            <View>
              <Text style={styleLogin.welcome}>been missed</Text>
            </View>
          </View>
        </View>
        {/* Header */}

        <View style={styleLogin.body}>
          <View style={styleLogin.boxUsername}>
            <View>
              <View style={styleLogin.text}>
                <Text style={styleLogin.textInput}>Username</Text>
                <Text style={styleLogin.multi}>*</Text>
              </View>
            </View>
            <View style={styleLogin.input}>
              <TextInput value={email} onChangeText={text => setEmail(text)} />
            </View>
          </View>

          <View style={styleLogin.boxPassword}>
            <View>
              <View style={styleLogin.text}>
                <Text style={styleLogin.textInput}>Password</Text>
                <Text style={styleLogin.multi}>*</Text>
              </View>
            </View>
          </View>
          <View style={styleLogin.input}>
            <TextInput
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
            />
          </View>
          <View style={styleLogin.boxChoose}>
            <View style={styleLogin.rememberMe}>
              <Checkbox
                size={25}
                fillColor="red"
                text="Remember me"
                iconStyle={{borderColor: 'red'}}
                innerIconStyle={{borderWidth: 2}}
                textStyle={{
                  fontWeight: 'normal',
                  textDecorationLine: 'none',
                  fontSize: 14,
                  color: '#1877F2',
                }}
                onPress={isChecked => {}}
              />
            </View>
            <Pressable onPress={goToForgot}>
              <View>
                <Text style={styleLogin.forgot}>Forgot password?</Text>
              </View>
            </Pressable>
          </View>
          <TouchableOpacity onPress={goToArticles}>
            <View style={styleLogin.login}>
              <Text style={styleLogin.textLogin}>Login</Text>

              {/* {isLoading == true ? (
                <ActivityIndicator animating={true} size="small" />
              ) : (
                <Text style={styleLogin.textLogin}>Login</Text>
              )} */}
            </View>
          </TouchableOpacity>
        </View>
        {/* Body */}
        {/* Footer */}
        <View style={styleLogin.footer}>
          <View style={styleLogin.boxConnect}>
            <Text style={styleLogin.connect}>or connect with</Text>
          </View>
          {/* Box Social */}
          <View style={styleLogin.boxSocials}>
            <TouchableOpacity>
              <View style={styleLogin.boxSocial}>
                <Image
                  source={{
                    uri: 'https://brandlogos.net/wp-content/uploads/2021/04/facebook-icon.png',
                  }}
                  style={styleLogin.iconSocial}
                />
                <View>
                  <Text style={styleLogin.textSocial}>Facebook</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styleLogin.boxSocial}>
                <Image
                  source={{
                    uri: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',
                  }}
                  style={styleLogin.iconSocial}
                />
                <View>
                  <Text style={styleLogin.textSocial}>Google</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          {/* Box Social */}
          {/* Box SignUp */}
          <View style={styleLogin.boxSignUp}>
            <View>
              <Text style={styleLogin.textDont}>Don't have an account ? </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(Router.REGISTER);
                }}>
                <Text style={styleLogin.signUp}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Box SignUp */}

        {/* Footer */}
      </View>
    </SafeKeyComponent>
  );
};

export default Login;
