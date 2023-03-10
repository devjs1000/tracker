import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import History from './History';
import AntDesign from 'react-native-vector-icons/AntDesign';
import NavBar from '../components/NavBar';

const Tab = createBottomTabNavigator();

const Screen = () => {
 
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: 'tomato',
            tabBarShowLabel: false,
            header: () => <NavBar />,
            tabBarActiveBackgroundColor: '#20262E',
            tabBarInactiveBackgroundColor: '#20262E',
          }}>
          <Tab.Screen
            name="Home"
            options={{
              tabBarIcon(props) {
                return <AntDesign name="home" {...props} />;
              },
            }}
            component={Home}
          />
          <Tab.Screen
            name="History"
            options={{
              tabBarIcon(props) {
                return <AntDesign name="clockcircleo" {...props} />;
              },
            }}
            component={History}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Screen;

const styles = StyleSheet.create({});
