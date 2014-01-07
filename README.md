##*This is a draft. This tool is not yet ready for public consumption!*

# ndebug

Using **ndebug** you can easily launch the Google Chrome developer tools to interactively debug your Node.js scripts while they run, providing a very pleasant and extremely producitive debugging workflow.

Under the hood, **ndebug** leverages the excellent [**node-inspector**](https://npmjs.org/package/node-inspector) which handles all the complexity of connecting the Chrome developer tools to your running Node process. **ndebug** simply automates the otherwise combersome multi-step process normally required when using **node-inspector** by itself.

## Installation

Assuming you've alread installed Node.js, install **ndebug** globally using the following command...

    $ sudo npm install -g ndebug

That's it! The only other prerequisite is that the Google Chrome browser is installed on your computer.


## Usage

To debug a Node.js script you're working on, use the following command...

    $ ndebug myscript.js

This will start your script, launch the Google Chrome developer tools, and pause your script's execution on the first line. At that point, you can add breakpoints and then resume execution of your code.

To pass arguments to your script simply append them after the command...

    $ ndebug myscript.js apple banana


