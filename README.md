# app3
testing application

for cordova

### install
```sh 
cordova create testapp com.zegenie.plugin.InAppBrowserXwalk

git clone https://github.com/janpekarguru/app3

copy and overwrite files from app3/www to testapp/www

cd testapp
```


```sh 
cordova platform add android
cordova platform add ios
cordova plugin add https://github.com/apache/cordova-plugin-wkwebview-engine
cordova plugin add https://github.com/janpekarguru/cordova-plugin-inappbrowser
cordova plugin add https://github.com/crosswalk-project/cordova-plugin-crosswalk-webview
cordova buid android
cordova build ios
```


### Background
Plugin developed for [ZeGenie Inc] [ze].

### Install
    cordova plugin add https://github.com/janpekarguru/cordova-plugin-inappbrowser
### Remove
    cordova plugin remove com.zegenie.cordova.plugin.inappbrowserxwalk


Add to config.xml for getScreenshot to work on android:
```sh 
<preference name="CrosswalkAnimatable" value="true" />	
```




   
   [ze]: <http://www.zegenie.com>
