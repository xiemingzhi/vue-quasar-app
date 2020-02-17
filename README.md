# Vue Quasar App (vue-quasar-app)

A Quasar Framework app

## Install the dependencies
```bash
npm install -g @quasar/cli
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
npm run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

Edit .eslintrc.js  
Inside rules  
```
"prettier/prettier": ["error", {
    "endOfLine":"auto"
  }],
```

### Customize for android 
Install [android studio](https://developer.android.com/studio/index.html) and android SDK.  
Install [gradle](https://downloads.gradle-dn.com/distributions/gradle-4.10.3-all.zip).  
Add ANDROID_HOME, GRADLE_HOME to PATH.  

Install cordova
```
npm install -g cordova
quasar mode add cordova 
cd src-cordova
cordova platform add android
cordova requirements
cd ..
quasar dev -m cordova -T android
```

