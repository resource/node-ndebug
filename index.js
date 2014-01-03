#! /usr/bin/env node

var exec = require("child_process").exec;
var spawn = require("child_process").spawn;
var fork = require('child_process').fork;
var format = require("util").format;

var nodeScriptFile = process.argv[2];
var nodeScriptArgs = process.argv.slice(3, process.argv.length);
var inspectorUrl = "http://127.0.0.1:8080/debug?port=5858";

// Launch node-inspector.
spawn(require.resolve('node-inspector/bin/inspector'), []);

// Launch script to be debugged.
var debugScriptRunning = true;
var debugCommand = format("node --debug-brk %s %s", nodeScriptFile, nodeScriptArgs.join(" "));
var debugProcess = exec(debugCommand);
debugProcess.on("exit", function() {
    debugScriptRunning = false;
});

debugProcess.stdout.on("data", onStdOutData);
debugProcess.stderr.on("data", onStdErrData);

// Wait for a short period to determine if the debug script launched successfully before launching the browser.
setTimeout(function() {
    if (debugScriptRunning) launchBrowser();
}, 500);


// ==== FUNCTIONS ====


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
