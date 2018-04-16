"use strict";

// use the firebase lib
const functions = require('firebase-functions');
var ActionsSdkApp = require('actions-on-google').ActionsSdkApp;
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    let app = new ActionsSdkApp({request, response});

    function handleMainIntent() {
        app.ask("Hey");
    }
  
    function handleTextIntent() {
        app.ask(app.getRawInput());
    }
  
    // finally: create map and handle request
    // map all intents to specific functions
    let actionMap = new Map();
    actionMap.set(app.StandardIntents.MAIN, handleMainIntent);
    // all follow-up requests will trigger the next intent.
    // Be sure to include it.
    actionMap.set(app.StandardIntents.TEXT, handleTextIntent);
      
    // apply this map and let the sdk parse and handle the request
    // and your responses
    app.handleRequest(actionMap);
});
