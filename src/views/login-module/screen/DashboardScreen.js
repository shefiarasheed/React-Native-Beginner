import React from 'react';

import {
    View,
    StyleSheet,
    StatusBar,
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import COLORS from '../../../constants/colors';
import STRINGS from '../../../constants/strings';
import IMAGES from '../../../assets/splashIcon/images';
import ElementsUICustomButton from '../../../elements_ui_component/elements_ui_button/elements_ui_custom_button';
import ElementsUICustomTextView from '../../../elements_ui_component/elements_ui_textview/elements_ui_custom_text_view';
//import { createDrawerNavigator } from '@react-navigation/drawer';

const DashboardScreen = ({ navigation }) => {

    return (

        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
            <ImageBackground
                style={styles.background}
                source={IMAGES.dashboard_bottom_background_white_square}
            >
                <View style={styles.screenHeader}>

                    <Image source={IMAGES.app_logo} style={styles.appLogo} />
                    <View style={styles.screenHeaderIcon}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('NotificationScreen')}
                        style={[]}
                    >
                        <Image source={IMAGES.notifications_standard} style={styles.bellIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('OpenTaskScreen')}
                        style={[]}
                    >
                         <Image source={IMAGES.open_tasks_alert} style={styles.bellIconRight} />
                    </TouchableOpacity>
                     
                    </View>

                </View>
                <View style={styles.alignColumnStyle}>
                    <ElementsUICustomTextView
                        title={STRINGS.GLOBAL_ENTERPRISE_SOLUTION_CAPTION} style={styles.globalEnterpriseTxtStyle}>

                    </ElementsUICustomTextView>
                    <View style={styles.alignColumnStyle}>
                        <View style={styles.invoiceButtonStyle}>
                            <ElementsUICustomButton
                                title={STRINGS.REVIEW_INVOICE_CAPTION}
                                textStyle={[styles.elementsUICustomButtonTextStyle, {

                                }]}
                                style={[styles.elementsUICustomButtonStyle, {

                                }]}>
                            </ElementsUICustomButton>
                        </View>
                        <View style={styles.favouriteReportButtonStyle}>
                            <ElementsUICustomButton
                             onPress={() => navigation.navigate('MyReportScreen')}
                           
                                title={STRINGS.FAVOURITE_REPORT}
                                textStyle={[styles.elementsUICustomButtonTextStyle, {

                                }]}
                                style={[styles.elementsPrimaryButtonDisabledStyle, {

                                }]}>
                            </ElementsUICustomButton>
                        </View>
                    </View>

                </View>

            </ImageBackground>

            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.footer, {
                    backgroundColor: COLORS.APWARMGREY50
                }]}
            >
                <ScrollView
                    style={{ flex: 1, }}
                    contentContainerStyle={{ flexGrow: 1 }}
                    showsVerticalScrollIndicator={false}>

                    <View style={styles.alignRowStyle}>
                        <View style={styles.blueGradient}>
                            <ElementsUICustomTextView
                                title={STRINGS.ACTIVE_EMPLOYEES_CAPTION}
                                style={styles.white700Style}>

                            </ElementsUICustomTextView>
                            <View style={styles.blueGradientInnerText}>
                                <ElementsUICustomTextView
                                    title='87'
                                    style={styles.white300Style}>

                                </ElementsUICustomTextView>
                            </View>
                        </View>
                        <View style={styles.whiteGradient}>
                            <Image source={IMAGES.employee_diagram} style={styles.employeeCircleStyle} />
                            <View style={styles.alignColumnActiveEmployeeStyle}>
                                <ElementsUICustomTextView
                                    title= '81 Active'
                                    style={styles.activetxtStyle}>

                                </ElementsUICustomTextView>
                                <ElementsUICustomTextView
                                    title= '12 Onboarding'
                                    style={styles.onboardingtxtStyle}>

                                </ElementsUICustomTextView>
                                <ElementsUICustomTextView
                                    title= '7 Terminated'
                                    style={styles.terminatedtxtStyle}>

                                </ElementsUICustomTextView>
                            </View>
                        </View>
                    </View>
                    <View style={styles.alignRowStyle}>
                        <View style={styles.whiteGradientFullWidth}>

                            <View style={styles.alignColumnActiveEmployeeCostStyle}>
                                <ElementsUICustomTextView
                                    title= {STRINGS.EMPLOYEE_COST_CAPTION}
                                    style={styles.totalEmployeeCosttxtStyle}>

                                </ElementsUICustomTextView>
                                <ElementsUICustomTextView
                                    title= {STRINGS.PER_MONTH_CAPTION}
                                    style={styles.monthUSDtxtStyle}>

                                </ElementsUICustomTextView>
                                <ElementsUICustomTextView
                                    title='417,203.0'
                                    style={styles.usdTxtValueStyle}>

                                </ElementsUICustomTextView>
                            </View>
                            <Image source={IMAGES.pig_money} style={styles.employeeTotalCostImageStyle} />
                        </View>
                    </View>
                    <View style={styles.settingsViewStyle}>
                    <Image source={IMAGES.settings_icon} style={styles.settingsImageStyle} />
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SettingsScreen')}
                        style={[]}
                    >
                       
                     
                        <ElementsUICustomTextView
                            title={STRINGS.SETTINGS_CAPTION}
                            style={styles.settingsCaptionStyle}>
                        </ElementsUICustomTextView>
                    </TouchableOpacity>
                        
                    </View>
                </ScrollView>
            </Animatable.View>
        </SafeAreaView>
    );
};

export default DashboardScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.APWHITE
    },
    footer: {
        flex: 1,
        backgroundColor: COLORS.APWHITE,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 15,
        width: '100%',
        position: 'absolute',
        top: 320,
        right: 0,
    },
    appLogo: {
        marginTop: 35,
        resizeMode: 'stretch',
    },

    screenHeader: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'flex-start',
        marginHorizontal: 30,
        marginTop: 0,
    },
    background: {
        width: '100%',
        height: 180,
    },
    alignRowStyle: {
        flex: 1,
        flexDirection: 'row',
    },
    employeeCircleStyle: {
        marginTop: 20,
        marginHorizontal: 12,
        width: 60,
        height: 60,
    },
    alignColumnStyle: {
        flex: 1,
        flexDirection: 'column',
    },
    alignRowStyle: {
        flex: 1,
        flexDirection: 'row',
    },
    bellIcon: {
        marginTop: 10,
        width: 80,
        height: 80,
    },
    bellIconRight: {
        marginTop: 10,
        width: 80,
        height: 80,
    },
    screenHeaderIcon: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'flex-start',
        marginHorizontal: 25,
        marginTop: 0,
    },
    invoiceButtonStyle: {
        marginTop: 25,
        justifyContent: 'flex-start',
        marginHorizontal: 30,
    },
    favouriteReportButtonStyle: {
        marginTop: 15,
        justifyContent: 'flex-start',
        marginHorizontal: 30,
    },
    blueGradient: {
        flexDirection: 'column',
        marginTop: 5,
        paddingBottom: 0,
        marginHorizontal: 15,
        borderRadius: 30,
        height: 145,
        width: 140,
        backgroundColor: COLORS.APTEAL400
    },
    whiteGradient: {
        flexDirection: 'column',
        marginTop: 5,
        paddingBottom: 0,
        marginHorizontal: 0,
        borderRadius: 30,
        height: 145,
        width: 140,
        backgroundColor: COLORS.APWHITE
    },
    whiteGradientFullWidth: {
        flexDirection: 'row',
        marginTop: 15,
        marginHorizontal: 15,

        borderRadius: 30,
        height: 165,
        width: 295,
        backgroundColor: COLORS.APWHITE
    },

    blueGradientInnerText: {
        flexDirection: 'row',
        paddingHorizontal: 15,
    },
    alignColumnActiveEmployeeStyle: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginHorizontal: 18,
    },
    alignColumnActiveEmployeeCostStyle: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginHorizontal: 15,
        marginTop: 25,
    },
    employeeTotalCostImageStyle: {
        marginTop: 10,
        marginHorizontal: 0,
        marginEnd:10,
        
    },
    settingsImageStyle: {
        marginTop: 10,
        marginHorizontal: 12,
    },
    white300Style: {
        marginTop: 0,
        marginHorizontal: 10,
        fontSize: 77,
        color: COLORS.APWHITE,
        fontFamily: 'Poppins',
        fontWeight: '300',
    },
    white700Style: {
        fontSize: 12,
        color: COLORS.APWHITE,
        fontFamily: 'Poppins',
        fontWeight: '700',
        marginTop: 20,
        marginHorizontal: 12,
    },
    elementsUICustomButtonStyle: {
        width: '100%',
        height: 55,
        backgroundColor: COLORS.APTEAL200,
        borderRadius: 20,
        paddingVertical: 15,
        paddingHorizontal: 12
    },
    elementsUICustomButtonTextStyle: {
        fontSize: 18,
        color: COLORS.APWHITE,
        alignSelf: "center",
        fontFamily: 'Poppins',
        fontWeight: 'bold',
    },
    elementsPrimaryButtonDisabledStyle: {
        width: '100%',
        height: 55,
        backgroundColor: COLORS.APGREEN200,
        borderRadius: 20,
        paddingVertical: 15,
        paddingHorizontal: 12
    },
    globalEnterpriseTxtStyle: {
        marginTop: 25,
        marginHorizontal: 30,
        fontSize: 16,
        color: COLORS.APCOOLGREY400,
        paddingBottom: 10,
        fontWeight: 'bold',
    },
    activetxtStyle: {
        marginTop: 0,
        marginHorizontal: 10, fontSize: 12,
        color: COLORS.APGREEN200,
        fontFamily: 'Poppins',
        fontWeight: '700',
    },
    onboardingtxtStyle: {
        marginTop: 0,
        marginHorizontal: 10, fontSize: 12,
        color: COLORS.APDARKGREEN,
        fontFamily: 'Poppins',
        fontWeight: '700',
    },
    terminatedtxtStyle: {

        marginTop: 0,
        marginHorizontal: 10, fontSize: 12,
        color: COLORS.APORANGE300,
        fontFamily: 'Poppins',
        fontWeight: '700',

    },
    totalEmployeeCosttxtStyle: {
        marginTop: 0,
        marginHorizontal: 10,
        fontSize: 12,
        color: COLORS.APTEAL200,
        fontFamily: 'Poppins',
        fontWeight: '700',
    },
    monthUSDtxtStyle: {
        marginTop: 0,
        marginHorizontal: 10, fontSize: 12,
        color: COLORS.APDARKGREEN,
        fontFamily: 'Poppins',
        fontWeight: '700',
    },
    usdTxtValueStyle: {

        marginTop: 0,
        marginHorizontal: 10,
        fontSize: 35,
        color: COLORS.APGREEN200,
        fontFamily: 'Poppins',
        fontWeight: '400',

    },
    settingsCaptionStyle: {

        fontSize: 16,
        color: COLORS.APDARKGREEN,
        fontFamily: 'Poppins',
        fontWeight: 'bold',

    },
    settingsViewStyle: { 
        flex: 1, 
        marginTop: 25, 
        alignItems: 'flex-end', 
        flexDirection: 'row', 
        paddingBottom: 10, 
        justifyContent: 'flex-end', 
        marginHorizontal: 20, },

});
