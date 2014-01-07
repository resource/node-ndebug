#! /usr/bin/env node

var exec = require("child_process").exec,
    spawn = require("child_process").spawn,
    fork = require('child_process').fork,
    format = require("util").format,

    inspectorUrl = "http://127.0.0.1:8080/debug?port=5858",

    debugTargetFailedToLaunch = false;


// == PUBLIC API ==========


exports.run = function(scriptFile, scriptArgs) {

    launchNodeInspector();

    launchDebugTargetScript(scriptFile, scriptArgs);

    // Wait for a short period to determine if the debug script launched successfully before launching the browser.
    setTimeout(function() {
        if (!debugTargetFailedToLaunch) {
            launchBrowser();
        }
    }, 500);

}


// == PRIVATE FUNCTIONS ===


function launchNodeInspector() {

    spawn(require.resolve('node-inspector/bin/inspector'), []);

}


function launchDebugTargetScript(scriptFile, scriptArgs) {

    var debugCommand = format("node --debug-brk %s %s", scriptFile, scriptArgs.join(" ")),
        debugProcess = exec(debugCommand);

    debugProcess.on("exit", function() {
        debugTargetFailedToLaunch = true;
    });

    debugProcess.stdout.on("data", onStdOutData);
    debugProcess.stderr.on("data", onStdErrData);

}


function launchBrowser() {

    exec('open -a "/Applications/Google Chrome.app" ' + inspectorUrl,
        function(error, stdout, stderr) {
            if (error == null) {
                console.log("Script execution has been paused on the first line of your code. Set any desired breakpoints then click \"Resume code execution\" in the Chrome Dev Tools to continue.");
            } else {
                console.error("There was a problem launching Google Chrome. ", error);
            }
        });

}


function onStdOutData(data) {

    console.log(data.trimRight());

}


function onStdErrData(data) {

    console.error(data.trimRight());

}
