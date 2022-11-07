import {StyleSheet} from 'react-native';

const styleRegister = StyleSheet.create({
  /* Container */
  container: {
    flex: 1,
    margin: 24,
  },
  /* Container */
  /* Header */
  header: {
    flex: 3,
  },
  hello: {
    color: `#1877F2`,
    fontSize: 48,
    fontWeight: '700',
  },
  welcome: {
    fontSize: 20,
    fontWeight: '400',
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
    padding: 10,
  },
  text: {
    flexDirection: 'row',
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
    marginVertical: 20,
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
    color: 'blue',
    justifyContent: 'flex-end',
  },
  login: {
    backgroundColor: '#1877F2',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 40,
  },
  textSignUp: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  /* Body */
  /* Footer */
  footer: {
    flex: 7,
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

  boxLogin: {
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
  textAlready: {
    fontSize: 14,
    fontWeight: '400',
  },
  signUp: {
    color: '#1877F2',
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
    marginTop: 16,
  },
  /* Footer */
});
export default styleRegister;
