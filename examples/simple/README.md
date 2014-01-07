# Simple Example

Before trying this example be sure you've followed the [installation instructions](https://github.com/Krxtopher/node-ndebug/blob/master/README.md) for **ndebg**.

To try out this example follow these steps:

After downloading the example code, use the Terminal to `cd` to the `examples/simple/` directory.

Run the following command...

    $ ndebug helloworld.js

The Chrome developer tools should automatically launch and pause on the first line of your script. You can use the "Step over" button (or press F10) to step through your code one line at a time. Or you can add a breakpoint by clicking on the line number of the line of code you would like to pause at, and then click the "Resume code execution" button (or press F8) to run your code until it reaches that breakpoint.

If you'd like to try the example with a command line argument run a command like this...

	$ ndebug helloworld.js friend