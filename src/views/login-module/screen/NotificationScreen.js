import React, { useState } from "react";

import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import COLORS from '../../../constants/colors';
import STRINGS from '../../../constants/strings';
import IMAGES from '../../../assets/splashIcon/images';
import NotificationOld from '../../../mock/notification_old';
import Notification from '../../../mock/notification';
import { FlatList } from 'react-native-gesture-handler';

import ElementsUICustomTextView from '../../../elements_ui_component/elements_ui_textview/elements_ui_custom_text_view';
const { height } = Dimensions.get("screen");

const NotificationScreen = ({ navigation }) => {
  const CartCardOlder = ({ item }) => {
    return (
      <View style={styles.cartCardOld}>

        <View
          style={{
            height: 110,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <View style={styles.alignRowStyle}>
            <Image source={IMAGES.notification_bell_red_icon} style={styles.rightIconStyle} />
            <ElementsUICustomTextView
              title={item.name}
              style={styles.cartCardOldNameStyle}></ElementsUICustomTextView>

          </View>
          <ElementsUICustomTextView
            title={item.ingredients}
            style={styles.cartCardOldIncredientStyle}>{item.ingredients}
          </ElementsUICustomTextView>

        </View>

      </View>
    );
  };
  const CartCard = ({ item }) => {
    return (
      <View style={styles.cartCard}>

        <View
          style={{
            height: 120,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <View style={styles.alignRowStyle}>
            <Image source={IMAGES.notification_bell_red_icon} style={styles.rightIconStyle} />
            <ElementsUICustomTextView
              title={item.name}
              style={styles.cartCardNameStyle}></ElementsUICustomTextView>
            <ElementsUICustomTextView
              title={item.time}
              style={styles.cartCardTimeStyle}></ElementsUICustomTextView>
          </View>
          <ElementsUICustomTextView
            title={item.ingredients}
            style={styles.cartCardIncredientStyle}>
          </ElementsUICustomTextView>

        </View>

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
        <View style={styles.alignRowStyle}>
          <ElementsUICustomTextView
            title={STRINGS.NOTIFICATION_CAPTION}
            style={styles.notificationtxtStyle}>

          </ElementsUICustomTextView>
        </View>

      </ImageBackground>

      <Animatable.View
        animation="fadeInUpBig"
        style={[styles.footer, {
          backgroundColor: COLORS.APWARMGREY50
        }]}
      >
        <View >
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ marginTop: 10 }}
            data={Notification}
            renderItem={({ item }) => <CartCard item={item} />}
            ListFooterComponentStyle={{ paddingHorizontal: 0, marginTop: 0 }}
            ListFooterComponent={() => (
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 15,
                  }}>

                </View>

              </View>
            )}

          />
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ marginTop: 0 }}
            data={NotificationOld}
            renderItem={({ item }) => <CartCardOlder item={item} />}
            ListFooterComponentStyle={{ paddingHorizontal: 0, marginTop: 0 }}
            ListFooterComponent={() => (
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 0,
                  }}>

                </View>

              </View>
            )}
            ListHeaderComponent={() => (
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 0,
                  }}>
                  <ElementsUICustomTextView
                    title= {STRINGS.OLDER_TXT_CAPTION}
                    style={styles.oldertxtStyle}>
                  </ElementsUICustomTextView>
                </View>

              </View>
            )}
          />
        </View>
      </Animatable.View>


    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.APWHITE
  },
  footer: {
    flex: 1,
    backgroundColor: COLORS.APWARMGREY50,
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

  cartCard: {
    height: 110,
    elevation: 15,
    borderRadius: 25,
    backgroundColor: COLORS.APWHITE,
    marginVertical: 12,
    marginHorizontal: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartCardOld: {
    height: 80,
    elevation: 15,
    borderRadius: 25,
    backgroundColor: COLORS.APWHITE,
    marginVertical: 12,
    marginHorizontal: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightIconStyle: {
    marginTop: 5,

  },
  cartCardOldNameStyle: {
    marginTop: 5,
    marginHorizontal: 10,
    fontSize: 16,
    color: COLORS.APCOOLGREY400,
    fontWeight: 'bold',
  }, cartCardOldIncredientStyle: {
    marginTop: 0,
    marginHorizontal: 0,
    fontSize: 16,
    color: COLORS.APCOOLGREY400,
    paddingBottom: 10,
    fontWeight: 'normal',
  }, cartCardNameStyle: {
    marginTop: 5,
    marginHorizontal: 10,
    fontSize: 16,
    color: COLORS.APRED300,
    fontWeight: 'bold',
  }, cartCardTimeStyle: {
    marginTop: 7,
    marginHorizontal: 60,
    fontSize: 14,
    color: COLORS.APRED200,
    fontWeight: '400',
  },
  cartCardIncredientStyle: {
    marginTop: 0,
    marginHorizontal: 0,
    fontSize: 16,
    color: COLORS.APDARKGREEN,
    paddingBottom: 10,
    fontWeight: 'normal',
  },
  notificationtxtStyle: {
    fontSize: 26,
    color: COLORS.APTEAL500,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    marginHorizontal: 40,
  },
  oldertxtStyle: {
    marginTop: 0,
    marginHorizontal: 30,
    fontSize: 12,
    color: COLORS.APTEAL200,
    paddingBottom: 0,
    fontWeight: 'bold',
  }
});
