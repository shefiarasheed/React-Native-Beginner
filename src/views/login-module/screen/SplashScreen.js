import React, {useEffect} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import IMAGES from '../../../assets/splashIcon/images';
import COLORS from '../../../constants/colors';

const { height } = Dimensions.get("screen");
const heightLogo = height * 0.20;

const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
//MyReportScreen LoginFaceId LoginTouchId
      navigation.navigate('DomainSelection')
    }, 3000);
  }, []);
  return (
    <View style={styles.splashContainer}>
      <StatusBar backgroundColor={COLORS.background} barStyle="light-content" />
      <View style={styles.splashHeader}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={IMAGES.splash}

          resizeMode="stretch"
        />
      </View>

    </View>
  );
};


const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: COLORS.APWARMGREY100
  },
  splashHeader: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: heightLogo,
  },

});

export default SplashScreen;