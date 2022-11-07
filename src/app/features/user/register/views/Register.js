/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {LOG} from '../../../../../../logger.config';
import SafeKeyComponent from '../../../../components/safe_key/SafeKeyComponent';
import {Router} from '../../../../navigation/Router';
import styleRegister from './Style_Register';
const log = LOG.extend(`REGISTER.js`);
const Register = ({navigation}) => {
  
  useEffect(() => {
    return () => {};
  }, []);

  const [email, setEmail] = useState(`newtest123@gmail.com`);
  const [password, setPassword] = useState(`111`);
  const goToLogin = () => {
   
  };
  return (
    <SafeKeyComponent>
      <View style={styleRegister.container}>
        <View style={styleRegister.header}>
          <View>
            <Text style={styleRegister.hello}>Hello !</Text>
          </View>
          <View>
            <Text style={styleRegister.welcome}>Sign up to get Started</Text>
          </View>
        </View>

        <View style={styleRegister.body}>
          <View style={styleRegister.boxUsername}>
            <View>
              <View style={styleRegister.text}>
                <Text>Username</Text>
                <Text style={styleRegister.multi}>*</Text>
              </View>
            </View>
            <View style={styleRegister.input}>
              <TextInput value={email} onChangeText={text => setEmail(text)} />
            </View>
          </View>

          <View style={styleRegister.boxPassword}>
            <View>
              <View style={styleRegister.text}>
                <Text>Password</Text>
                <Text style={styleRegister.multi}>*</Text>
              </View>
            </View>
            <View style={styleRegister.input}>
              <TextInput
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry={true}
              />
            </View>
          </View>

          <TouchableOpacity onPress={goToLogin}>
            <View style={styleRegister.login}>
              <Text style={styleRegister.textSignUp}>Sign Up</Text>

              {/* {isLoading == true ? (
                <ActivityIndicator size="small" />
              ) : (
                <Text style={styleRegister.textSignUp}>Sign Up</Text>
              )} */}
            </View>
          </TouchableOpacity>
        </View>
        <View style={styleRegister.footer}>
          <View>
            <Text>or connect with</Text>
          </View>
          <View style={styleRegister.boxSocials}>
            <TouchableOpacity>
              <View style={styleRegister.boxSocial}>
                <Image
                  source={{
                    uri: 'https://brandlogos.net/wp-content/uploads/2021/04/facebook-icon.png',
                  }}
                  style={styleRegister.iconSocial}
                />
                <View>
                  <Text style={styleRegister.textSocial}>Facebook</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styleRegister.boxSocial}>
                <Image
                  source={{
                    uri: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',
                  }}
                  style={styleRegister.iconSocial}
                />
                <View>
                  <Text style={styleRegister.textSocial}>Google</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styleRegister.boxLogin}>
            <View>
              <Text style={styleRegister.textAlready}>
                Already have an account ?
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={goToLogin}>
                <Text style={styleRegister.signUp}> Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeKeyComponent>
  );
};

export default Register;
