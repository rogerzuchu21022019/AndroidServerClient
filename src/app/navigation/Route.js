import Login from '../features/user/login/views/Login';
import Register from '../features/user/register/views/Register';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Route = () => {
  const HomeScreen = ({navigation}) => (
    <SafeAreaView>
      <View>
        <Text>HomeScreen</Text>
      </View>
    </SafeAreaView>
  );

  const DetailScreen = ({navigation}) => (
    <SafeAreaView>
      <View>
        <Text>DetailScreen</Text>
      </View>
    </SafeAreaView>
  );

  const SearchScreen = ({navigation}) => (
    <SafeAreaView>
      <View>
        <Text>SearchScreen</Text>
      </View>
    </SafeAreaView>
  );
  const ProfileScreen = ({navigation}) => {
    const move = () => {
      navigation.navigate('EditProfile');
    };

    return (
      <SafeAreaView>
        <View>
          <TouchableOpacity onPress={move}>
            <Text>ProfileScreen</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  const EditProfileScreen = ({navigation}) => {
    const move = () => {
      navigation.navigate('Login');
    };
    
    return (
      <SafeAreaView>
        <View>
          <TouchableOpacity onPress={move}>
            <Text>EditProfileScreen</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };

  const FirstStackInTab = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };
  const SecondStackInTab = () => {
    //Import the other screens you use!
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };

  const ThirdStackInTab = ({isToken}) => {
    //Import the other screens you use!
    return (
      <Stack.Navigator>
        <Stack.Screen
          initialParams={{isToken}}
          name="Profile"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          initialParams={{isToken}}
          name="EditProfile"
          component={EditProfileScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };

  const AuthStack = ({isToken}) => {
    //Import the other screens you use!
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login1"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register1"
          component={Register}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };

  const MainStack = ({isToken}) => {
    //Import the other screens you use!
    return (
      <Tabs.Navigator>
        <Tabs.Screen
          name="Main"
          component={FirstStackInTab}
          options={{headerShown: false}}
        />
        <Tabs.Screen
          name="Second"
          component={SecondStackInTab}
          options={{headerShown: false}}
        />
        <Tabs.Screen
          initialParams={isToken}
          name="Third"
          component={ThirdStackInTab}
          options={{headerShown: false}}
        />
      </Tabs.Navigator>
    );
  };

  const isToken = false;
  return (
    <NavigationContainer>
      {isToken === false ? <AuthStack /> : <MainStack />}
    </NavigationContainer>
  );
};

export default Route;
