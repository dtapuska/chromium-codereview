"use strict";

// Blank the document so the 404 page doesn't show up visibly.
document.documentElement.style.display = 'none';

// Can't use DOMContentLoaded, calling document.write or document.close inside it from
// inside an extension causes a crash.
window.addEventListener("load", function() {
    document.write(
        "<!DOCTYPE html>" +
        "<meta name=viewport content='initial-scale=1, maximum-scale=1, user-scalable=no'>" +
        "<title>Chromium Code Review</title>" +
        "<script src='" + resolveUrl("bower_components/platform/platform.js") + "'></script>" +
        "<script>EXTENSION_URL = '" + chrome.extension.getURL("") + "';</script>" +
        "<link rel='import' href='" + resolveUrl("bower_components/polymer/polymer.html") + "'>" +
        "<link rel='import' href='" + resolveUrl("ui/components/cr-app.html") + "'>" +
        "<link rel='stylesheet' href='" + resolveUrl("ui/style.css") + "'>" +
        "<cr-app></cr-app>"
    );
    document.close();
    document.documentElement.style.display = '';
});
