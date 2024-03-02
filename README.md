### How to test

- Put `google-services.json` and `GoogleService-Info.plist` at root project
- Open `app.json`, change `android.package` and `ios.bundleIdentifier` to package name and bundle ID used in Google Service files
- Install dependencies `yarn` or `npm i`, suit yourself
- Run `npx expo prebuild`
- Start testing
