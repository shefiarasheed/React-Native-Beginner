import React from 'react';
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
const RootStack = createStackNavigator();

const HomeNavigation = ({navigation}) => (

    <RootStack.Navigator headerMode='none'>
    <RootStack.Screen name="DashboardScreen" component={DashboardScreen}/>
    <RootStack.Screen name="NotificationScreen" component={NotificationScreen}/>
    <RootStack.Screen name="OpenTaskScreen" component={OpenTaskScreen}/>
    <RootStack.Screen name="MyReportScreen" component={MyReportScreen}/>
        
</RootStack.Navigator>
);



export default HomeNavigation;