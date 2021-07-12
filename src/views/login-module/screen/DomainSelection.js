import React from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    StatusBar,
    Image,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
import { useState } from "react";
import * as Animatable from 'react-native-animatable';
import COLORS from '../../../constants/colors';
import STRINGS from '../../../constants/strings';
import IMAGES from '../../../assets/splashIcon/images';
import APNGSVG from '../../../assets/apngIcon/images';
import CONSTANTS from '../../../constants/constants';
import ElementsUICustomTextView from '../../../elements_ui_component/elements_ui_textview/elements_ui_custom_text_view';
import ElementsUICustomButton from '../../../elements_ui_component/elements_ui_button/elements_ui_custom_button';
const height = CONSTANTS.SCREEN_HEIGHT;
const width = CONSTANTS.SCREEN_WIDTH;
const heightLogo = height * 0.16;
const DomainSelectionCustomerView = ({ navigation }) => {
    const [showSubmitButton, setShowSubmitButton] = useState(0);
    const [data, setData] = React.useState({
        domain: '',
        isValidUser: true,
        check_textInputChange: false,
    });

    const textInputChange = (val) => {

        if (val.toLowerCase().trim() === 'elements' || val.toLowerCase().trim() === 'globalenterprise') {
            setShowSubmitButton(1);
            setData({
                ...data,
                check_textInputChange: true,
                isValidUser: true
            });


        } else {
            setShowSubmitButton(0);
            setData({
                ...data,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }


    const handleValidDomain = (val) => {
        if (val.toLowerCase().trim() === 'elements' || val.toLowerCase().trim() === 'globalenterprise') {
            setData({
                ...data,
                domain: val,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }


    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
            <ImageBackground
                style={styles.background}
                source={IMAGES.login_background_square}
            >
                <View style={styles.loginHeader}>
                    <View style={styles.appLogoContainer}>
                        
                        <Image source={IMAGES.app_logo} style={styles.appLogo} />
                    </View>
                </View>
            </ImageBackground>
            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.footer, {
                    backgroundColor: COLORS.APWHITE
                }]}
            >
                
                <Image source={IMAGES.login_app_icon} style={styles.loginAppIcon} />
                <Image source={IMAGES.login_app_icon_inside} style={styles.loginAppIconInside} />

                <View >
                    <ElementsUICustomTextView
                        title={STRINGS.DOMAIN_CAPTION}
                        style={styles.aquaGreen26BoldStyle}>

                    </ElementsUICustomTextView>
                </View>
                <View style={styles.alignRow}>

                    <View style={styles.companyDomainIconStyle}>

                        <APNGSVG.DomainVector  />
                    </View>
                    <View style={styles.companyDomainInputStyle}>

                        <TextInput
                            placeholder={STRINGS.COMPANY_DOMAIN_CAPTION}
                            placeholderTextColor={COLORS.APCOOLGREY200}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => textInputChange(val)}
                            onEndEditing={(e) => handleValidDomain(e.nativeEvent.text)}
                        />

                    </View>
                    <ElementsUICustomTextView
                        title={STRINGS.APPROV_DOMAIN_CAPTION}
                        style={styles.approvPayTxtStyle}>

                    </ElementsUICustomTextView>
                </View>


                <View style={styles.button}>
                    {showSubmitButton == 0 ? (
                        <ElementsUICustomButton
                            title={STRINGS.CONTINUE_TXT_CAPTION}
                            enable={true}
                         
                            textStyle={[styles.elementsPrimaryButtonTextStyle, {

                            }]}
                            style={[styles.elementsPrimaryButtonDisabledStyle, {

                            }]}>
                        </ElementsUICustomButton>
                    ) :

                        <ElementsUICustomButton
                            title={STRINGS.CONTINUE_TXT_CAPTION}
                            enable={false}
                            onPress={() => navigation.navigate('SignInScreen')}
                            textStyle={[styles.elementsPrimaryButtonTextStyle, {

                            }]}
                            style={[styles.elementsPrimaryButtonEnabledStyle, {

                            }]}>
                        </ElementsUICustomButton>
                    }
                    <TouchableOpacity

                        style={[]}
                    >
                        <ElementsUICustomTextView
                            title={STRINGS.MY_DOMAIN_CAPTION}
                            style={styles.whatisMyDomainTxtStyle}>

                        </ElementsUICustomTextView>
                    </TouchableOpacity>
                </View>

            </Animatable.View>
        </KeyboardAvoidingView>
    );
};

export default DomainSelectionCustomerView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },

    footer: {
        flex: 3,
        backgroundColor: COLORS.APWHITE,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 30,
        width: '100%',
        height: '80%',
        position: 'absolute',
        top: height / 3 - 10,
        right: 0,
        flexDirection: 'column',
    },
    companyDomainInputStyle: {
        flexDirection: 'row',
        marginTop: 20,
        paddingBottom: 0,
        marginHorizontal: 0,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 15,
        height: 55,
        width: '50%',
        borderColor: COLORS.APWARMGREY50,
        borderWidth: 0,
        backgroundColor: COLORS.APWARMGREY50
    },
    companyDomainIconStyle: {
        flexDirection: 'row',
        marginTop: 20,
        paddingBottom: 0,
        marginHorizontal: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 0,
        height: 55,
        width: '15%',
        borderColor: COLORS.APCOOLGREY100,
        borderWidth: 0,
        backgroundColor: COLORS.APCOOLGREY100,
        justifyContent: "center",
        alignItems: 'center',
    },

    alignRow: {
        flexDirection: 'row',
        marginTop: 0,
        marginBottom: 0,
    },
    alignColumn: {
        flexDirection: 'column',
        marginTop: 0,
        paddingBottom: 0,
    },
    textInput: {
        flex: 1,
        color: COLORS.APTEAL200,
        fontFamily: 'Poppins',
        fontSize: 13,
        fontWeight: '600',
        marginHorizontal: 2,
    },
    button: {
        alignItems: 'center',
        marginTop: height / 3,
        flexDirection: 'column',
    },
    appLogo: {
        marginTop: 30,
        resizeMode: 'stretch',
        width:125,
        height:25,
    },
    appLogoContainer: {
       
        marginEnd: 30,
        flexDirection: "row",
        justifyContent: "flex-end",
        height: heightLogo,
    },
    loginHeader: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 0,
        marginBottom: 100,
    },
    background: {
        width: '100%',
        height: height / 3 + 10,
    },


    loginAppIcon: {
        position: 'absolute',
        top: -40,
        right: 10,
        width: 100,
        height: 100,
    },

    loginAppIconInside: {
        position: 'absolute',
        top: -12,
        right: 35,
        width: 45,
        height: 45,
    },


    txtAlignColumn: {
        flex: 1,
        flexDirection: 'column',
    },

    aquaGreen26BoldStyle: {
        marginTop: 30,
        marginHorizontal: 10,
        fontSize: 22,
        color: COLORS.APDARKGREEN,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
    },
 
    approvPayTxtStyle: {
        fontSize: 12,
        color: COLORS.APDARKGREEN,
        fontFamily: 'Poppins',
        fontWeight: '500',
        marginTop: 38,
        marginHorizontal: 5,

    },
    elementsPrimaryButtonDisabledStyle: {
        width: width / 2 + 130,
        marginStart: 30,
        marginEnd: 30,
        height: 55,
        justifyContent: "center",
        backgroundColor: COLORS.APTEAL100,
        borderRadius: 15,

    },
    elementsPrimaryButtonEnabledStyle: {
        width: width / 2 + 130,
        marginStart: 30,
        marginEnd: 30,
        height: 55,
        justifyContent: "center",
        backgroundColor: COLORS.APTEAL200,
        borderRadius: 15,

    },
    elementsPrimaryButtonTextStyle: {

        fontSize: 15,
        color: COLORS.APWHITE,
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontWeight: '600',
    },
    whatisMyDomainTxtStyle: {
        fontSize: 12,
        color: COLORS.APGREEN200,
        fontFamily: 'Poppins',
        fontWeight: '500',
        marginTop: 20,
        marginHorizontal: 5,
        marginBottom: 10,
    },
   
});
