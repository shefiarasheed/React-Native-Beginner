import React, { useState } from "react";

import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import COLORS from '../../../constants/colors';
import STRINGS from '../../../constants/strings';
import IMAGES from '../../../assets/splashIcon/images';
import FavouriteReport from '../../../mock/favourite_report';
import FavouriteReportOther from '../../../mock/favourite_report_other';
import { FlatList } from 'react-native-gesture-handler';

import ElementsUICustomTextView from '../../../elements_ui_component/elements_ui_textview/elements_ui_custom_text_view';
const { height } = Dimensions.get("screen");

const MyReportScreen = ({ navigation }) => {
  const CartCardOlder = ({ item }) => {
    return (
      <View style={styles.cartCardOld}>

        <View
          style={{
            height: 60,
            marginLeft: 10,
            paddingVertical: 15,
            flex: 1,
          }}>
          <View style={styles.alignRowStyle}>
            <Image source={IMAGES.heart_red_icon} style={styles.rightIconStyle} />
            <ElementsUICustomTextView
              title={item.name}
              style={styles.cartCardOldNameStyle}></ElementsUICustomTextView>

          </View>
         

        </View>

      </View>
    );
  };
  const CartCard = ({ item }) => {
    return (
      <View style={styles.cartCard}>

        <View
          style={{
            height: 60,
            marginLeft: 10,
            paddingVertical: 15,
            flex: 1,
          }}>
          <View style={styles.alignRowStyle}>
            <Image source={IMAGES.heart_red_icon} style={styles.rightIconStyle} />
            <ElementsUICustomTextView
              title={item.name}
              style={styles.cartCardNameStyle}></ElementsUICustomTextView>
          
          </View>
        

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

          <Image source={IMAGES.app_logo} style={styles.appLogo} />
          <View style={styles.screenHeaderIcon}>
            <Image source={IMAGES.eclipse_dashboard} style={styles.bellIcon} />
            <Image source={IMAGES.eclipse_dashboard} style={styles.bellIconRight} />
          </View>

        </View>
        <View style={styles.alignColumnStyle}>
          <ElementsUICustomTextView
            title={STRINGS.GLOBAL_ENTERPRISE_SOLUTION_CAPTION}
            style={styles.globalEnterpriseSolutiontxtStyle}>

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
           showsVerticalScrollIndicator={false}
           showsHorizontalScrollIndicator={false}
         style={styles.scrollView}>
         <View >
          <ElementsUICustomTextView
            title={STRINGS.MYREPORT_CAPTION}
            style={styles.myreportxtStyle}>

          </ElementsUICustomTextView>
        </View>
        <View >
        <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ marginTop: 10 }}
            data={FavouriteReport}
            renderItem={({ item }) => <CartCard item={item} />}

            ListHeaderComponentStyle={{ paddingHorizontal: 0, marginTop: 0 }}
            ListHeaderComponent={() => (
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 0,
                  }}>
                  <ElementsUICustomTextView
                    title= {STRINGS.FAVOURITE_REPORT_CAPTION}
                    style={styles.newtxtStyle}>
                  </ElementsUICustomTextView>
                </View>

              </View>
            )}

          />
          
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ marginTop: 0 }}
            data={FavouriteReportOther}
            renderItem={({ item }) => <CartCardOlder item={item} />}
            ListHeaderComponentStyle={{ paddingHorizontal: 0, marginTop: 0 }}
            ListHeaderComponent={() => (
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 0,
                  }}>
                  <ElementsUICustomTextView
                    title= {STRINGS.OTHER_REPORT_CAPTION}
                    style={styles.oldertxtStyle}>
                  </ElementsUICustomTextView>
                </View>

              </View>
            )}
          />
        </View>
        </ScrollView>
      </Animatable.View>
  

    </SafeAreaView>
  );
};

export default MyReportScreen;

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
    height: '100%',
    paddingBottom:200,
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
    height: 60,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: COLORS.APWHITE,
    marginVertical: 12,
    marginHorizontal: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartCardOld: {
    height: 60,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: COLORS.APWHITE,
    marginVertical: 12,
    marginHorizontal: 10,
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
    color: COLORS.APDARKGREEN,
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
    marginHorizontal: 20,
    fontSize: 16,
    color: COLORS.APCOOLGREY400,
    fontWeight: 'bold',
  }, 
  newtxtStyle: {
    marginTop: 30,
    marginHorizontal: 25,
    fontSize: 20,
    color: COLORS.APRED200,
    paddingBottom: 0,
    fontWeight: 'bold',
  },
  oldertxtStyle: {
    marginTop: 30,
    marginHorizontal: 25,
    fontSize: 20,
    color: COLORS.APTEAL200,
    paddingBottom: 0,
    fontWeight: 'bold',
  },  appLogo: {
    marginTop: 35,
    marginHorizontal: 20,
    resizeMode: 'stretch',
},  bellIcon: {
  marginTop: 10,
  width: 80,
  height: 80,
},
bellIconRight: {
  marginTop: 10,
  width: 80,
  height: 80,
},
alignColumnStyle: {
  flex: 1,
  flexDirection: 'column',
}, globalEnterpriseSolutiontxtStyle: {
    marginTop: 10,
    marginHorizontal: 30,
    fontSize: 16,
    color: COLORS.APCOOLGREY400,
    paddingBottom: 10,
    fontWeight: 'bold',
  }, myreportxtStyle: {
    fontSize: 26,
    color: COLORS.APCOOLGREY400,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginTop:15,
  },  scrollView: {
    backgroundColor: COLORS.APWARMGREY50,
    marginHorizontal: 20,
  },
});
