import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import LoginTouchId from './LoginTouchId';
import LoginFaceId from './LoginFaceId';
import DashboardScreen from './DashboardScreen';
import SettingsScreen from './SettingsScreen';
import OpenTaskScreen from './OpenTaskScreen';
import NotificationScreen from './NotificationScreen';
import MyReportScreen from './MyReportScreen';
import DomainSelection from './DomainSelection';
import IMAGES from '../../../assets/splashIcon/images';
import COLORS from '../../../constants/colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeNavigation from './HomeNavigation';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabNavigator = () =>{
  return(
<Tab.Navigator
tabBarOptions={{
  showLabel: false,
  style: {
    position: 'absolute',
    bottom: 0,
    height: 70,
    elevation: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.APWHITE,
    borderRadius: 0,
    ...styles.shadow,
  },
}}
>
<Tab.Screen name="DashboardScreen" component={DashboardScreen}
  options={{
    tabBarIcon: ({ focused }) => (

      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        top: 10,
        marginStart:20,
      }}>
        <Image source={IMAGES.bottom_dashboard} style={{
          width: 25, height: 25,
          tintColor: focused ? COLORS.APTEAL200 : COLORS.APDARKGREEN
        }}
          resizeMode='contain' />
       
      </View>
    )
  }} />
<Tab.Screen name="InvoiceScreen" component={SettingsScreen}
   options={{
    tabBarIcon: ({ focused }) => (

      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        top: 10,
      }}>
        <Image source={IMAGES.invoice_icon} style={{
          width: 25, height: 25,
          tintColor: focused ? COLORS.APTEAL200 : COLORS.APDARKGREEN
        }}
          resizeMode='contain' />
        
      </View>
    )
  }} />
   <Tab.Screen name="ExpenseScreen" component={SettingsScreen}
   options={{
    tabBarIcon: ({ focused }) => (

      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        top: 10,
      }}>
        <Image source={IMAGES.expense_icon} style={{
          width: 25, height: 25,
          tintColor: focused ? COLORS.APTEAL200 : COLORS.APDARKGREEN
        }}
          resizeMode='contain' />
        
      </View>
    )
  }} />
   <Tab.Screen name="EmployeesScreen" component={SettingsScreen}
   options={{
    tabBarIcon: ({ focused }) => (

      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        top: 10,
      }}>
        <Image source={IMAGES.employees_icon} style={{
          width: 25, height: 25,
          tintColor: focused ? COLORS.APTEAL200 : COLORS.APDARKGREEN
        }}
          resizeMode='contain' />
        
      </View>
    )
  }} />
   <Tab.Screen name="ReportScreen" component={SettingsScreen}
   options={{
    tabBarIcon: ({ focused }) => (

      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        top: 10,
        marginEnd:20,
      }}>
        <Image source={IMAGES.report_icon} style={{
          width: 25, height: 25,
          tintColor: focused ? COLORS.APTEAL200 : COLORS.APDARKGREEN
        }}
          resizeMode='contain' />
       
      </View>
    )
  }} />
</Tab.Navigator>
  )
} 
  

const DashboardNavigator = () => (
    <Drawer.Navigator>
      <Drawer.Screen name="TabNavigator" component={TabNavigator}/>
      </Drawer.Navigator>
);

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.APWHITE,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    backgroundColor: COLORS.APWHITE,
  },

});
export default DashboardNavigator;
