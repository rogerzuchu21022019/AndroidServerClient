/* Check Import */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {Router} from '../Router';
const Tab = createBottomTabNavigator();
/* Check Import */

const Container = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={Router.HOME}
        component={ArticlesScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            // <IconAntDesign name="home" size={25} color={color} />
            <Image source={require(`../../images/Home.png`)} />
          ),
        }}
      />
      <Tab.Screen
        name={Router.SEARCH}
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            // <IconAntDesign name="search1" size={25} color={color} />
            <Image source={require(`../../images/Search.png`)} />
          ),
        }}
      />
      <Tab.Screen
        name={Router.PROFILE}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            // <IconAntDesign name="setting" size={25} color={color} />
            <Image source={require(`../../images/Profile.png`)} />
          ),
        }}
        component={LogOutScreen}
      />
    </Tab.Navigator>
  );
};

export default Container;
