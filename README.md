# app3
testing application

for cordova

### install
```sh 
cordova create testapp com.zegenie.plugin.InAppBrowserXwalk

git clone https://github.com/janpekarguru/app3

copy fileas and overwrite from app3/www to testapp/www

cd testapp
```


```sh 
cordova platform add android
cordova platform add ios
cordova plugin add https://github.com/janpekarguru/cordova-plugin-inappbrowser
cordova plugin add https://github.com/crosswalk-project/cordova-plugin-crosswalk-webview
cordova plugin add https://github.com/apache/cordova-plugin-wkwebview-engine
cordova buid android
cordova build ios
```


### Background
Plugin developed for [ZeGenie Inc] [ze].

### Install
    cordova plugin add https://github.com/janpekarguru/cordova-plugin-inappbrowser
### Remove
    cordova plugin remove cordova-plugin-inappbrowser


Add to config.xml for getScreenshot to work on android:
```sh 
<preference name="CrosswalkAnimatable" value="true" />	
```




   
   [ze]: <http://www.zegenie.com>
