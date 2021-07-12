import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import LoginScreen from './LoginScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import LoginTouchId from './LoginTouchId';
import LoginFaceId from './LoginFaceId';
import DashboardScreen from './DashboardScreen';
import SettingsScreen from './SettingsScreen';
import OpenTaskScreen from './OpenTaskScreen';
import NotificationScreen from './NotificationScreen';
import MyReportScreen from './MyReportScreen';
import DomainSelection from './DomainSelection';
import { StackNavigator } from  'react-navigation';


const RootStack = createStackNavigator();

const Navigation = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
     
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/> 
 
        <RootStack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}/>
     

    </RootStack.Navigator>
);

export default Navigation;