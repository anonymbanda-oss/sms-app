import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sohelmodelschool.sms',
  appName: 'SMS',
  webDir: 'www',

  backgroundColor: '#FFFFFF',
  loggingBehavior: 'none',

  server: {
    url: 'https://www.sohelmodelschool.com',
    cleartext: false,

    // Keep the website inside the Android WebView
    allowNavigation: [
      'www.sohelmodelschool.com',
      'sohelmodelschool.com'
    ]
  },

  android: {
    allowMixedContent: false
  }
};

export default config;
