import React from 'react';
import {
    Text,
    Platform,
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

    const [showEmailText, setShowEmailText] = useState(0);
  
    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        isValidUser: true,
    });

    const textInputChange = (val) => {
        if (val.trim().length >= 1) {
            setShowEmailText(1);
        }else{
            setShowEmailText(0);
        }

        if (val.trim().length >= 4) {
          
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
           
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

   

    const handleValidUser = (val) => {
        if (val.trim().length >= 4) {
            setShowSubmitButton(1);
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setShowSubmitButton(0);
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

                <View style={styles.txtAlignColumn}>
                    <ElementsUICustomTextView
                        title={STRINGS.RESET_PASSWORD_CAPTION}
                        style={styles.aquaGreen26BoldStyle}>

                    </ElementsUICustomTextView>
                   
                    <ElementsUICustomTextView
                        title={STRINGS.RESET_PASSWORD_TEXT}
                        style={styles.aquaGreen14NormalStyle}>

                    </ElementsUICustomTextView>
                </View>
                <View style={styles.alignColumn}>
                    {showEmailText == 0 ?
                        <ElementsUICustomTextView
                            title=''
                            style={[styles.text_footer, {
                                color: COLORS.APCOOLGREY400
                            }]}></ElementsUICustomTextView>
                        :
                        <ElementsUICustomTextView
                            title={STRINGS.EMAIL_CAPTION}
                            style={[styles.text_footer, {
                                color: COLORS.APCOOLGREY400
                            }]}></ElementsUICustomTextView>
                    }

                    <View style={styles.action}>

                        <TextInput
                            placeholder={STRINGS.EMAIL_CAPTION}
                            placeholderTextColor={COLORS.APCOOLGREY200}
                            style={[styles.textInput, {
                                color: COLORS.APDARKGREEN
                            }]}
                            autoCapitalize="none"

                            onChangeText={(val) => textInputChange(val)}
                            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                        />
                        {data.check_textInputChange ?
                            <Animatable.View
                                animation="bounceIn">
                                <Image source={IMAGES.email_validate} style={styles.iconAlign} />

                            </Animatable.View>
                            : null}
                    </View>
                </View>
                {data.isValidUser ? null :
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Enter Valid Email</Text>
                    </Animatable.View>
                }
               
               
               <View style={styles.button}>
                    {showSubmitButton == 0  ? (
                        <ElementsUICustomButton
                            title={STRINGS.RESET_PASSWORD_CAPTION}
                            enable={true}

                            textStyle={[styles.elementsPrimaryButtonTextStyle, {

                            }]}
                            style={[styles.elementsPrimaryButtonDisabledStyle, {

                            }]}>
                        </ElementsUICustomButton>
                    ) :

                        <ElementsUICustomButton
                            title={STRINGS.RESET_PASSWORD_CAPTION}
                            enable={false}
                            onPress={() => { loginHandle(data.username, data.password) }}
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
                            title=''
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
 
    alignColumn: {
        flexDirection: 'column',
        marginTop: 35,
        paddingBottom: 0,
        marginHorizontal: 8,
        borderRadius: 20,
        height: 65,
        borderColor: COLORS.APWARMGREY50,
        borderWidth: 2,
        backgroundColor: COLORS.APWARMGREY50
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -15,
        paddingLeft: 10,
        color: COLORS.APDARKGREEN,
        fontFamily: 'Poppins',
        fontSize: 15,
        fontWeight: '500',
        margin: 10,
    },
    button: {
        alignItems: 'center',
        marginTop: height / 5,
        marginBottom:40,
        flexDirection: 'column',
    },
    appLogo: {
        marginTop: 30,
        resizeMode: 'stretch',
        width: 125,
        height: 25,
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
        marginHorizontal: 20,
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
        width: width / 2 + 120,
        marginStart: 30,
        marginEnd: 30,
        height: 55,
        justifyContent: "center",
        backgroundColor: COLORS.APTEAL100,
        borderRadius: 15,

    },
    elementsPrimaryButtonEnabledStyle: {
        width: width / 2 + 120,
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
    }, text_footer: {
        marginTop: 10,
        marginHorizontal: 20,
        flexDirection: 'column',
        color: COLORS.APCOOLGREY400,
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 14,
    }, action: {
        flexDirection: 'row',
        marginTop: 0,
        paddingBottom: 0,
    }, errorMsg: {
        color: COLORS.APRED400,
        fontSize: 12,
        fontFamily: 'Poppins',
        marginTop: 10,
        fontWeight: 'normal',
        marginHorizontal: 10,
    }, alignColumnPassword: {
        flexDirection: 'column',
        marginTop: 10,
        paddingBottom: 0,
        marginHorizontal: 8,
        borderRadius: 20,
        height: 55,
        borderColor: COLORS.APWARMGREY50,
        borderWidth: 2,
        backgroundColor: COLORS.APWARMGREY50
    }, text_footerPassword: {
        marginTop: 10,
        marginHorizontal: 20,
        flexDirection: 'column',
        color: COLORS.APCOOLGREY400,
        fontFamily: 'Poppins',
        fontWeight: 'normal',
        fontSize: 14,
    }, actionPassword: {
        flexDirection: 'row',
        marginTop: 0,
        paddingBottom: 0,
    }, iconAlign: {
        flexDirection: 'row',
        marginTop: 0,
        marginHorizontal: 25,
        height: 12,
        width: 12,
    }, alignForgetPassword: {
        flexDirection: 'row',
        marginTop: 0,
        justifyContent: 'flex-end',
        marginHorizontal: 8,
        paddingBottom: 0,
    }, forgotPasswordTxtStyle: {
        color: COLORS.APDARKGREEN,
        marginTop: 10,
        fontFamily: 'Poppins',
        fontWeight: 'normal',
        fontSize: 12,
    }, alignCheckBox: {
        flexDirection: 'row',
        marginTop: 0,
        justifyContent: 'flex-start',
        marginHorizontal: 8,
        paddingBottom: 0,
    }, checkBoxIconAlign: {
        flexDirection: 'row',
        marginTop: 50,
        marginHorizontal: 5,
        height: 20,
        width: 20,
    }, rememberMeTxtStyle: {
        color: COLORS.APDARKGREEN,
        marginTop: 50,
        fontFamily: 'Poppins',
        fontWeight: 'normal',
        marginHorizontal: 10,
        fontSize: 14,
    },aquaGreen14NormalStyle: {
        marginTop: 10,
        marginHorizontal: 20,
        fontSize: 14,
        color: COLORS.APDARKGREEN,
        fontFamily: 'Poppins',
        fontWeight: '400',
    },

});
