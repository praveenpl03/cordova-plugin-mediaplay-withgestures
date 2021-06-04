# cordova-plugin-mediaplay-withgestures

## Description

This plugin allows you to stream audio and video in a fullscreen, <br>
Gestures add to scroll the bar horizontal touch drag and vertical to increase brightness,<br>
Duration in miliseconds will be returned on ending play. <br>
You can resume video using the duration returned by passing it to "start" parameter on option<br>
Native player on iOS and Android.

* 1.0.0 Works with Cordova 3.x
* * 1.0.1+ Works with Cordova >= 4.0


## Installation

```
cordova plugin add https://github.com/praveenpl03/cordova-plugin-mediaplay-withgestures

or

cordova plugin add cordova-plugin-mediaplay-withgestures

```

### iOS specifics
* Uses the AVPlayerViewController
* Tested on iOS 12 or later

### Android specifics
* Uses VideoView and MediaPlayer.
* Creates two activities in your AndroidManifest.xml file.
* Tested on Android 4.0+

## Usage

```javascript
  var Url = STREAMING_VIDEO_URL; (url/file path to stream) 

  // Just play a video
  window.plugins.MediaPlay.playVideo(Url);

  // Play a video with callbacks
  var options = {
    successCallback: function(response) {
      console.log(response); //{duration:"xxxx"} will be returned in miliseconds
    },
    errorCallback: function(errMsg) {
        console.log(errMsg); //{duration:"xxxx",message:"Error code"} will be returned
    },
    orientation: 'landscape',
    shouldAutoClose: true,  // true(default)/false
    controls: true, // true(default)/false. Used to hide controls on fullscreen
    start:0 // seekto function to play video start time in miliseconds default 0 opional presently on android only
  };
  window.plugins.streamingMedia.playVideo(videoUrl, options);


  var audioUrl = STREAMING_AUDIO_URL;

  // Play an audio file (not recommended, since the screen will be plain black)
  window.plugins.MediaPlay.playAudio(audioUrl);

  // Play an audio file with options (all options optional)
  var options = {
    bgColor: "#FFFFFF",
    bgImage: "<SWEET_BACKGROUND_IMAGE>",
    bgImageScale: "fit", // other valid values: "stretch", "aspectStretch"
    initFullscreen: false, // true is default. iOS only.
    keepAwake: false, // prevents device from sleeping. true is default. Android only.
    successCallback: function() {
      console.log("Player closed without error.");
    },
    errorCallback: function(errMsg) {
      console.log("Error! " + errMsg);
    }
  };
  window.plugins.MediaPlay.playAudio(audioUrl, options);

  // Stop current audio
  window.plugins.MediaPlay.stopAudio();

  // Pause current audio (iOS only)
  window.plugins.MediaPlay.pauseAudio();

  // Resume current audio (iOS only)
  window.plugins.MediaPlay.resumeAudio();  

```

## Orginaly Modified the basic ver of cordova-plugin-streaming-media 
https://github.com/nchutchind/cordova-plugin-streaming-media
