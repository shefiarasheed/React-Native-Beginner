import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Alert,
    Image,
    KeyboardAvoidingView,
    Dimensions,
    ImageBackground
} from 'react-native';
import COLORS from '../../../constants/colors';
import * as Animatable from 'react-native-animatable';
import STRINGS from '../../../constants/strings';
import IMAGES from '../../../assets/splashIcon/images';
import { AuthContext } from '../../../components/context';
import Users from '../../../mock/model/users';
import ElementsUICustomTextView from '../../../elements_ui_component/elements_ui_textview/elements_ui_custom_text_view';
import ElementsUICustomButton from '../../../elements_ui_component/elements_ui_button/elements_ui_custom_button';
const { height } = Dimensions.get("screen");
const heightLogo = height * 0.16;
const LoginScreen = ({ navigation }) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });



    const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val) => {
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

    const handlePasswordChange = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const loginHandle = (userName, password) => {

        const foundUser = Users.filter(item => {
            return userName == item.username && password == item.password;
        });

        if (data.username.length == 0 || data.password.length == 0) {
            Alert.alert(STRINGS.ERROR_CAPTION, STRINGS.EMAIL_VALIDATION_MESSAGE, [
                { text: STRINGS.OKAY_CAPTION }
            ]);
            return;
        }

        if (foundUser.length == 0) {
            Alert.alert(STRINGS.ERROR_CAPTION, STRINGS.EMAIL_VALIDATION_MESSAGE_INCORRECT, [
                { text: STRINGS.OKAY_CAPTION }
            ]);
            return;
        }
        signIn(foundUser);
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
                        <Image source={IMAGES.approv_pay_logo_circle} style={styles.appLogo} />
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
                    <ElementsUICustomTextView style={styles.aquaGreen26BoldStyle}>
                        {STRINGS.LOGIN_CAPTION}
                    </ElementsUICustomTextView>
                    <ElementsUICustomTextView style={styles.blue8016BoldStyle}>
                        {STRINGS.ELEMENTS_CAPTION}
                    </ElementsUICustomTextView>

                </View>
                <View style={styles.alignColumn}>
                    <ElementsUICustomTextView
                        title={STRINGS.EMAIL_CAPTION}
                        style={[styles.text_footer, {
                            color: COLORS.APDARKGREEN
                        }]}></ElementsUICustomTextView>
                    <View style={styles.action}>

                        <TextInput
                            placeholder={STRINGS.EMAIL_CAPTION}
                            placeholderTextColor={COLORS.APCOOLGREY400}
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
                        <Text style={styles.errorMsg}>Enter Valid Email.</Text>
                    </Animatable.View>
                }

                <View style={styles.alignColumnPassword}>
                    <Text style={[styles.text_footerPassword, {
                        color: COLORS.APDARKGREEN,
                        marginTop: 5
                    }]}>{STRINGS.PASSWORD_CAPTION}</Text>
                    <View style={styles.actionPassword}>

                        <TextInput
                            placeholder={STRINGS.PASSWORD_CAPTION}
                            placeholderTextColor={COLORS.APCOOLGREY400}
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={[styles.textInput, {
                                color: COLORS.APDARKGREEN,
                            }]}
                            autoCapitalize="none"
                            onChangeText={(val) => handlePasswordChange(val)}
                        />
                        <TouchableOpacity
                            onPress={updateSecureTextEntry}
                        >
                            {data.secureTextEntry ?
                                <Image source={IMAGES.eye_open} style={styles.iconAlign} />
                                :
                                <Image source={IMAGES.eye_close} style={styles.iconAlign} />
                            }
                        </TouchableOpacity>
                    </View>
                </View>
                {data.isValidPassword ? null :
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>{STRINGS.FORGET_PASSWORD_VALIDATION}</Text>
                    </Animatable.View>
                }

                <View style={styles.alignForgetPassword}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ForgotPasswordScreen')}
                        style={[]}
                    >
                        <ElementsUICustomTextView
                            title={STRINGS.FORGET_PASSWORD_CAPTION}
                            style={styles.forgotPasswordTxtStyle}></ElementsUICustomTextView>
                    </TouchableOpacity>

                </View>
                <View style={styles.alignCheckBox}>
                    <Image source={IMAGES.checkbox_closed} style={styles.checkBoxIconAlign} />
                    <TouchableOpacity>
                        <ElementsUICustomTextView
                            title={STRINGS.REMEMBER_ME_CAPTION}
                            style={styles.rememberMeTxtStyle}>

                        </ElementsUICustomTextView>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <ElementsUICustomButton
                        title={STRINGS.LOGIN_TXT_CAPTION}
                        onPress={() => { loginHandle(data.username, data.password) }}
                        textStyle={[styles.elementsPrimaryButtonTextStyle, {

                        }]}
                        style={[styles.elementsPrimaryButtonDisabledStyle, {

                        }]}>
                    </ElementsUICustomButton>

                </View>
            </Animatable.View>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.APWHITE
    },

    footer: {
        flex: 3,
        backgroundColor: COLORS.APWHITE,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
        width: '100%',
        position: 'absolute',
        top: 190,
        right: 0,
    },
    text_footer: {
        marginTop: 10,
        marginHorizontal: 20,
        flexDirection: 'column',
        color: COLORS.APCOOLGREY400,
        fontFamily: 'Poppins',
        fontWeight: 'normal',
        fontSize: 14,
    },
    text_footerPassword: {
        marginTop: 10,
        marginHorizontal: 20,
        flexDirection: 'column',
        color: COLORS.APCOOLGREY400,
        fontFamily: 'Poppins',
        fontWeight: 'normal',
        fontSize: 14,
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
    alignColumnPassword: {
        flexDirection: 'column',
        marginTop: 10,
        paddingBottom: 0,
        marginHorizontal: 8,
        borderRadius: 20,
        height: 55,
        borderColor: COLORS.APWARMGREY50,
        borderWidth: 2,
        backgroundColor: COLORS.APWARMGREY50
    },
    action: {
        flexDirection: 'row',
        marginTop: 0,
        paddingBottom: 0,
    },
    actionPassword: {
        flexDirection: 'row',
        marginTop: 0,
        paddingBottom: 0,
    },
    alignForgetPassword: {
        flexDirection: 'row',
        marginTop: 0,
        justifyContent: 'flex-end',
        marginHorizontal: 8,
        paddingBottom: 0,
    },
    alignCheckBox: {
        flexDirection: 'row',
        marginTop: 0,
        justifyContent: 'flex-start',
        marginHorizontal: 8,
        paddingBottom: 0,
    },
    iconAlign: {
        flexDirection: 'row',
        marginTop: 0,
        marginHorizontal: 25,
        height: 12,
        width: 12,
    },
    checkBoxIconAlign: {
        flexDirection: 'row',
        marginTop: 50,
        marginHorizontal: 5,
        height: 20,
        width: 20,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -15,
        paddingLeft: 10,
        color: COLORS.APDARKGREEN,
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: 'normal',
        margin: 10,
    },

    errorMsg: {
        color: COLORS.APRED400,
        fontSize: 12,
        fontFamily: 'Poppins',
        marginTop: 10,
        fontWeight: 'normal',
        marginHorizontal: 10,
    },
    button: {
        alignItems: 'center',
        marginTop: 20,

    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontWeight: 'normal'
    },
    appLogo: {
        marginTop: 0,
        resizeMode: 'stretch',
    },
    appLogoContainer: {
        paddingHorizontal: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        height: heightLogo,
    },
    loginHeader: {
        flex: 1,

        paddingHorizontal: 0,
        paddingBottom: 40,
    },
    background: {
        width: '100%',
        height: 210,
    },
    loginTxtCaption: {
        marginTop: 45,
        marginHorizontal: 30,
        width: 70,
        height: 40,
    },
    elementsTxtCaption: {
        marginTop: 5,
        marginHorizontal: 30,
        width: 80,
        height: 24,
    },

    txtAlignColumn: {
        flex: 1,
        flexDirection: 'column',
    },
    loginAppIcon: {
        position: 'absolute',
        top: -50,
        right: 2,
        width: 150,
        height: 150,
    },
    loginAppIconInside: {
        position: 'absolute',
        top: -12,
        right: 35,
        width: 75,
        height: 75,
    },
    loginTxtCaption: {
        marginTop: 0,
        marginHorizontal: 10,
    },
    elementsTxtCaption: {
        marginTop: 0,
        marginHorizontal: 10,
    },
    txtAlignColumn: {
        flex: 1,
        flexDirection: 'column',
    },
    aquaGreen26BoldStyle: {
        marginTop: 45,
        marginHorizontal: 30,
        width: 70,
        height: 40,
        fontSize: 26,
        color: COLORS.APDARKGREEN,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
    }, blue8016BoldStyle: {
        marginTop: 5,
        marginHorizontal: 30,
        width: 80,
        height: 24,
        fontSize: 16,
        color: COLORS.APTEAL200,
        fontFamily: 'Poppins',
        fontWeight: '500',
    },
    elementsPrimaryButtonDisabledStyle: {
        width: 300,
        height: 55,

        backgroundColor: COLORS.APTEAL200,
        borderRadius: 20,
        paddingVertical: 15,
        paddingHorizontal: 12
    },
    elementsPrimaryButtonTextStyle: {
        fontSize: 18,
        color: COLORS.APWHITE,
        alignSelf: "center",
        fontFamily: 'Poppins',
        fontWeight: 'bold',
    }, rememberMeTxtStyle: {
        color: COLORS.APDARKGREEN,
        marginTop: 50,
        fontFamily: 'Poppins',
        fontWeight: 'normal',
        marginHorizontal: 10,
        fontSize: 14,
    },
    forgotPasswordTxtStyle: {
        color: COLORS.APDARKGREEN,
        marginTop: 10,
        fontFamily: 'Poppins',
        fontWeight: 'normal',
        fontSize: 12,
    }
});
