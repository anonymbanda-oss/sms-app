import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sohelmodelschool.sms',
  appName: 'SMS',
  webDir: 'www',
  backgroundColor: '#FFFFFF',
  loggingBehavior: 'none',

  // The Android app loads the live website.
  // Website updates therefore appear in the app without rebuilding the APK.
  server: {
    url: 'https://www.sohelmodelschool.com',
    cleartext: false
  },

  android: {
    allowMixedContent: false
  }
};

export default config;