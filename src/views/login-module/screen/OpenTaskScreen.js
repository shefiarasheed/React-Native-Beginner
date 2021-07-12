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

import OpenTask from '../../../mock/opentask';
import { FlatList } from 'react-native-gesture-handler';
import ElementsUICustomTextView from '../../../elements_ui_component/elements_ui_textview/elements_ui_custom_text_view';
const { height } = Dimensions.get("screen");

const OpenTaskScreen = ({ navigation }) => {
  const CartCard = ({ item }) => {
    return (
      <View style={styles.cartCard}>

        <View
          style={styles.cartCardStyle}>
          <View style={styles.alignRowStyle}>
            <Image source={IMAGES.clock_icon_new} style={styles.rightIconStyle} />
            <ElementsUICustomTextView
              title={item.name}
              style={styles.cartCardNameStyle}></ElementsUICustomTextView>
          </View>
          <ElementsUICustomTextView
            title={item.ingredients}
            style={styles.cartCardIngredientStyle}>
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
          title =   {STRINGS.OPEN_TASK_CAPTION}
          style={styles.openTaskStyle}>
          
          </ElementsUICustomTextView>
        </View>

      </ImageBackground>

      <Animatable.View
        animation="fadeInUpBig"
        style={[styles.footer, {
          backgroundColor: COLORS.APWARMGREY50
        }]}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
          data={OpenTask}
          renderItem={({ item }) => <CartCard item={item} />}
          ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
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
      </Animatable.View>
    </SafeAreaView>
  );
};

export default OpenTaskScreen;

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

  }, cartCardStyle: {
    height: 100,
    marginLeft: 10,
    paddingVertical: 20,
    flex: 1,
  }, cartCardNameStyle: {
    marginTop: 5,
    marginHorizontal: 10,
    fontSize: 16,
    color: COLORS.APORANGE300,
    fontWeight: 'bold',
  },
  cartCardIngredientStyle: {
    marginTop: 0,
    marginHorizontal: 0,
    fontSize: 16,
    color: COLORS.APDARKGREEN,
    paddingBottom: 10,
    fontWeight: 'normal',
  },
  openTaskStyle:{
    fontSize: 26,
    color: COLORS.APTEAL500,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    marginHorizontal: 40,
  }
});
