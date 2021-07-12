package com.approvpay;

import android.os.Bundle; // <- add this necessary import

import com.facebook.react.ReactActivity;

import com.zoontek.rnbootsplash.RNBootSplash; // <- add this necessary import


public class MainActivity extends ReactActivity {

@Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
    // SplashScreen.show(...) has to be called after super.onCreate(...)
    // Below line is handled by '@expo/configure-splash-screen' command and it's discouraged to modify it manually
   // SplashScreen.show(this, SplashScreenImageResizeMode.CONTAIN, ReactRootView.class, false);
    RNBootSplash.init(R.drawable.bootsplash, MainActivity.this);
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "Approvpay";
  }
}
