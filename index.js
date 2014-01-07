#! /usr/bin/env node

var idebug = require('./lib/ndebug'),
    scriptFile = process.argv[2],
    scriptArgs = process.argv.slice(3, process.argv.length);

idebug.run(scriptFile, scriptArgs);
