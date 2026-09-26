# SMS Android App

Android wrapper for:

https://www.sohelmodelschool.com

App name:

SMS

## How it works

This app loads the live Sohel Model School website.

That means website changes normally appear in the Android app without rebuilding the APK.

## Build

1. Replace `assets/icon.png` with the official SMS app icon.
2. Upload this entire folder to a GitHub repository.
3. Open GitHub -> Actions.
4. Select `Build SMS APK`.
5. Click `Run workflow`.
6. After the workflow finishes, open the workflow run.
7. Download the `SMS-APK` artifact.

Android Studio is not required.

## Important

The GitHub workflow generates the Android project automatically.

The APK is a debug APK intended for testing/internal distribution.