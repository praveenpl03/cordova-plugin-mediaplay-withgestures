"use strict";

function MediaPlay() {
}

MediaPlay.prototype.playAudio = function (url, options) {
	options = options || {};
	cordova.exec(options.successCallback || null, options.errorCallback || null, "MediaPlay", "playAudio", [url, options]);
};

MediaPlay.prototype.pauseAudio = function (options) {
    options = options || {};
    cordova.exec(options.successCallback || null, options.errorCallback || null, "MediaPlay", "pauseAudio", [options]);
};

MediaPlay.prototype.resumeAudio = function (options) {
    options = options || {};
    cordova.exec(options.successCallback || null, options.errorCallback || null, "MediaPlay", "resumeAudio", [options]);
};

MediaPlay.prototype.stopAudio = function (options) {
    options = options || {};
    cordova.exec(options.successCallback || null, options.errorCallback || null, "MediaPlay", "stopAudio", [options]);
};

MediaPlay.prototype.playVideo = function (url, options) {
	options = options || {};
	cordova.exec(options.successCallback || null, options.errorCallback || null, "MediaPlay", "playVideo", [url, options]);
};


MediaPlay.install = function () {
	if (!window.plugins) {
		window.plugins = {};
	}

	window.plugins.MediaPlay = new MediaPlay();
	return window.plugins.MediaPlay;
};

cordova.addConstructor(MediaPlay.install);
