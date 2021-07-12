import React, { useState } from "react";

import {
    View,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    Image,
    Dimensions,
    ImageBackground,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import COLORS from '../../../constants/colors';
import STRINGS from '../../../constants/strings';
import IMAGES from '../../../assets/splashIcon/images';

import ElementsUICustomTextView from '../../../elements_ui_component/elements_ui_textview/elements_ui_custom_text_view';
const { height } = Dimensions.get("screen");
const heightLogo = height * 0.16;
const SettingsScreen = ({ navigation }) => {

    const handleTouchPress = () => {
        setTouchIDSelection(touchIDSelection + 1)
    }
    const [faceIDSelection, setFaceIDSelection] = useState(0);
    const [touchIDSelection, setTouchIDSelection] = useState(0);
    const TouchIDSelection = ({ navigation }) => {
        return (
            <View >
                {touchIDSelection == 0 ? (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => handleTouchPress()}>
                        <View>
                            <View style={styles.alignRowStyle}>
                                <View style={styles.whiteGradientFullWidth}>
                                    <Image source={IMAGES.touchid_icon_inactive} style={styles.leftIconStyle} />
                                    <ElementsUICustomTextView
                                        title={STRINGS.TOUCHID_CAPTION}
                                        style={styles.touchIDCaptionStyle}>

                                    </ElementsUICustomTextView>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                ) :
                    (<TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => setTouchIDSelection(touchIDSelection - 1)}>
                        <View>
                            <View style={styles.alignRowStyle}>
                                <View style={styles.whiteGradientWithBorderFullWidth}>
                                    <Image source={IMAGES.touchid_icon_inactive} style={styles.leftIconStyle} />
                                    <ElementsUICustomTextView
                                        title={STRINGS.TOUCHID_CAPTION}
                                        style={styles.touchIDCaptionSelectedStyle}>

                                    </ElementsUICustomTextView>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>)}


            </View>
        );
    };
    const FaceIDSelection = ({ navigation }) => {
        return (
            <View >
                {faceIDSelection == 0 ? (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => setFaceIDSelection(faceIDSelection + 1)}>
                        <View>
                            <View style={styles.alignRowStyle}>
                                <View style={styles.whiteGradientFullWidth}>
                                    <Image source={IMAGES.faceid_icon_inactive} style={styles.leftIconStyle} />
                                    <ElementsUICustomTextView
                                        title={STRINGS.FACEID_CAPTION}
                                        style={styles.faceIDCaptionStyle}>

                                    </ElementsUICustomTextView>

                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => setFaceIDSelection(faceIDSelection - 1)}>
                        <View style={styles.alignRowStyle}>
                            <View style={styles.whiteGradientWithBorderFullWidth}>
                                <Image source={IMAGES.faceid_icon_inactive} style={styles.leftIconStyle} />
                                <ElementsUICustomTextView
                                    title={STRINGS.FACEID_CAPTION}
                                    style={styles.faceIDCaptionSelectedStyle}>

                                </ElementsUICustomTextView>

                            </View>
                        </View>
                    </TouchableOpacity>
                )}


            </View>
        );
    };

    return (

        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
            <ImageBackground
                style={styles.background}
                source={IMAGES.dashboard_bottom_background_white_square}
            >
                <View style={styles.screenHeader}>

                    <View style={styles.screenHeaderIcon}>

                        <Image source={IMAGES.eclipse_dashboard} style={styles.bellIconRight} />
                    </View>

                </View>
                <View style={styles.alignColumnStyle}>
                    <ElementsUICustomTextView
                        title={STRINGS.SETTINGS_CAPTION}
                        style={styles.settingaCaptionStyle}>

                    </ElementsUICustomTextView>


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

                        <ElementsUICustomTextView
                            title={STRINGS.CHOOSE_LOGIN_OPTION_CAPTION}
                            style={styles.loginOptionStyle}>

                        </ElementsUICustomTextView>
                    </View>
                    <FaceIDSelection />
                    <TouchIDSelection />


                    <View style={{ flex: 1, marginTop: 250, alignItems: 'flex-end', flexDirection: 'row', paddingBottom: 30, justifyContent: 'flex-end', marginHorizontal: 20, }}>
                        <Image source={IMAGES.logout_icon} style={styles.settingsImageStyle} />
                        <ElementsUICustomTextView
                            title={STRINGS.LOGOUT_CAPTION}
                            style={styles.logoutStyle}>

                        </ElementsUICustomTextView>
                    </View>
                </ScrollView>
            </Animatable.View>
        </SafeAreaView>
    );
};

export default SettingsScreen;

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
        top: 160,
        right: 0,
    },


    screenHeader: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'flex-end',
        marginHorizontal: 10,
        marginTop: 0,
    },
    background: {
        width: '100%',
        height: 180,
    },

    alignColumnStyle: {
        flex: 1,
        flexDirection: 'column',
    },

    alignRowStyle: {
        flex: 1,
        flexDirection: 'row',
    },

    bellIconRight: {
        marginTop: 10,
        width: 80,
        height: 80,
    },
    screenHeaderIcon: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'flex-end',
        marginHorizontal: 0,
        marginTop: 0,
    },

    whiteGradientFullWidth: {
        flexDirection: 'row',
        marginTop: 15,
        borderRadius: 25,
        height: 65,
        width: '100%',
        backgroundColor: COLORS.APWHITE,
    },
    whiteGradientWithBorderFullWidth: {
        flexDirection: 'row',
        marginTop: 15,
        borderRadius: 25,
        height: 65,
        width: '100%',
        borderColor: COLORS.APGREEN400,
        backgroundColor: COLORS.APWHITE,
        borderWidth: 2,
    },

    leftIconStyle: {
        marginTop: 21,
        marginHorizontal: 30,

    },
    settingsImageStyle: {
        marginTop: 10,
        marginHorizontal: 12,
    },
    touchIDCaptionStyle: {
        fontSize: 16,
        color: COLORS.APCOOLGREY500,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        marginHorizontal: 0,
        marginTop: 21,
    },
    touchIDCaptionSelectedStyle: {
        fontSize: 16,
        color: COLORS.APGREEN400,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        marginHorizontal: 0,
        marginTop: 21,
    },
    faceIDCaptionStyle: {
        fontSize: 16,
        color: COLORS.APCOOLGREY500,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        marginHorizontal: 0,
        marginTop: 21,
    },
    faceIDCaptionSelectedStyle: {
        fontSize: 16,
        color: COLORS.APGreen400,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        marginHorizontal: 0,
        marginTop: 21,
    },
    settingaCaptionStyle: {
        fontSize: 26,
        color: COLORS.APTEAL500,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        marginHorizontal: 40,
    },
    loginOptionStyle: {
        fontSize: 12,
        color: COLORS.APDARKGREEN,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        marginHorizontal: 30,
        marginTop: 40,
    },
    logoutStyle: {
        fontSize: 16,
        color: COLORS.APGREEN200,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
    },
});
