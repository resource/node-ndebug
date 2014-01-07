# ndebug

Using **ndebug** you can easily launch the Google Chrome developer tools to interactively debug your Node.js scripts while they run, providing a very pleasant and extremely producitive debugging workflow.

Under the hood, **ndebug** leverages the excellent [**node-inspector**](https://npmjs.org/package/node-inspector) which handles all the complexity of connecting the Chrome developer tools to your running Node process. **ndebug** simply automates the otherwise combersome multi-step process normally required when using **node-inspector** by itself.

## Prerequisites

- Currently runs only on Mac
- Node.js must be installed
- Google Chrome must be installed at the default location `/Applications/Google Chrome.app`

## Installation

Install **ndebug** globally using the following command...

    $ sudo npm install -g ndebug

That's it!


## Usage

To debug a Node.js script you're working on use the following command...

    $ ndebug myscript.js

This will start your script, launch the Google Chrome developer tools, and pause your script's execution on the first line. At that point, you can add breakpoints and then resume execution of your code.

To pass arguments to your script simply append them after the command...

    $ ndebug myscript.js apple banana

If, after your script has completed execution, you are not returned to a command prompt simply type **Control-C** to terminate the **ndebug** command.

## To Note

This tool currently uses port 8080 for communication between Chrome and **node-inspector**. Customization of this port number may be provided in a future release.

## Example

A simple example Node script has been provided for you to practice with. You'll find that example and instructions on how to use it here:

[Simple Example](https://github.com/Krxtopher/node-ndebug/tree/master/examples/simple)
