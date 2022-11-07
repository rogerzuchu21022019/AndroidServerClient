import {StyleSheet} from 'react-native';
import {color} from '../../../../utils/Color';

import {fontWeight, size} from '../../../../utils/Fonts';

const styleLogin = StyleSheet.create({
  /* Container */
  container: {
    flex: 1,
    margin: 24,
  },
  /* Container */
  /* Header */
  header: {
    flex: 4,
    // backgroundColor: 'blue',
    flexDirection: 'row',
  },
  rightHeader: {
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 96,
    height: 96,
  },
  hello: {
    fontSize: 48,
    fontWeight: '700',
    color: '#050505',
    // backgroundColor: 'green',
  },
  against: {
    color: color.primary,
    fontSize: 48,
    fontWeight: '700',
    // backgroundColor: 'yellow',
  },
  welcome: {
    fontSize: 20,
    fontWeight: '400',
    color: '#4E4B66',
    fontStyle: 'normal',
  },
  /* Header */
  /* Body */
  body: {
    flex: 5,
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderRadius: 7,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  text: {
    flexDirection: 'row',
  },
  textInput: {
    fontWeight: fontWeight.ok,
    fontSize: 14,
  },
  multi: {
    color: 'red',
  },
  boxUsername: {},
  boxPassword: {
    marginTop: 16,
  },
  boxChoose: {
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  remember: {
    marginHorizontal: 10,
  },
  forgot: {
    alignItems: 'flex-end',
    color: color.primary,
    justifyContent: 'flex-end',
    fontWeight: fontWeight.dou4,
    fontSize: size.normal,
  },
  login: {
    backgroundColor: color.primary,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 16,
  },
  textLogin: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },

  /* Body */
  /* Footer */
  footer: {
    flex: 6,
    alignItems: 'center',
  },
  boxConnect: {
    marginTop: 16,
    marginBottom: 16,
  },
  connect: {
    fontSize: 14,
    fontWeight: '400',
  },

  boxSignUp: {
    flexDirection: 'row',
    marginTop: 16,
  },
  textSocial: {
    color: '#667080',
    fontWeight: '600',

    fontSize: 16,
  },
  iconSocial: {
    width: 40,
    height: 40,
  },
  textDont: {
    fontSize: 14,
    fontWeight: '400',
  },
  signUp: {
    color: color.primary,
    fontWeight: '600',
    fontSize: 14,
  },
  boxSocials: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    // backgroundColor: 'blue',
  },
  boxSocial: {
    backgroundColor: '#DFE1E3',
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    width: 174,
    height: 48,
  },
  /* Footer */
});
export default styleLogin;
