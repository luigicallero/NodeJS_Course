# Node.js Exercises

### Description

Several NodeJS exercises to practice what was learned on codeacademy at https://www.codecademy.com/learn/emodules/emod-nodejs-introduction

## Documentation
### Modules: 

Modularity is a software design technique where one program has distinct parts, each providing a single piece of the overall functionality. These separate modules come together to build a cohesive whole. Modularity is essential for creating scalable programs which incorporate libraries and frameworks and separate the program’s concerns into manageable chunks. Essentially, a module is a collection of code located in a file. Instead of having an entire program located in a single file, code is organized into separate files based on the concerns they address. These files can then be included in other files by using the require() function.

To save developers from reinventing the wheel each time, Node.js has several built-in modules to perform common tasks efficiently. These are known as the core modules. The core modules are defined within Node.js’s source code and are located in the lib/ folder. Core modules can be required by passing a string with the name of the module into the require() function:
```javascript
// Require in the 'events' core module:
const events = require('events');
```
or use this one to list all modules in NodeJS:
```javascript
const allModules = require('module').builtinModules;
```


## The Process Module
In computer science, a process is the instance of a computer program that is being executed. You can open Task Manager if you’re on a Windows machine or Activity Monitor from a Mac to see information about the various processes running on your computer right now. Node has a global process object with useful methods and information about the current process.

The process.env property is an object which stores and controls information about the environment in which the process is currently running. For example, the process.env object contains a PWD property which holds a string with the directory in which the current process is located. It can be useful to have some if/else logic in a program depending on the current environment— a web application in a development phase might perform different tasks than when it’s live to users. We could store this information on the process.env. One convention is to add a property to process.env with the key NODE_ENV and a value of either production or development.

```javascript
if (process.env.NODE_ENV === 'development'){
  console.log('Testing! Testing! Does everything work?');
}
```
The process.memoryUsage() returns information on the CPU demands of the current process. It returns a property that looks similar to this:
```
{
  rss: 34291712,
  heapTotal: 8044544,
  heapUsed: 6388456,
  external: 1059690,
  arrayBuffers: 25940
}
```
Heap can mean different things in different contexts: a heap can refer to a specific data structure, but it can also refer to a block of computer memory. The process.memoryUsage().heapUsed method will return a number representing how many bytes of memory the current process is using.

The process.argv property holds an array of command line values provided when the current process was initiated. The first element in the array is the absolute path to Node, which ran the process. The second element in the array is the path to the file that’s running. The following elements will be any command line arguments provided when the process was initiated. Command line arguments are separated from one another with spaces.

```javascript 
console.log(process.argv[3]); // Prints 'several'
```

## OS Module
When developing or debugging an app, it can be helpful to have information about the computer, operating system, and network on which the program is running. Before Node, this information could not be retrieved using JavaScript due to the language being confined to the browser. However, Node.js is a JavaScript runtime, which means it can execute code outside of the browser, and we’re able to get access to much of this information through the os core module.

Unlike process and console, the os module is not global and needs to be included into the file in order to gain access to its methods. You can include the os module into your file by typing:
```javascript
const os = require('os');
```

With the os module saved to the os variable, you can call methods like:

* os.type() — to return the computer’s operating system.
* os.arch() — to return the operating system CPU architecture.
* os.networkInterfaces() — to return information about the network interfaces of the computer, such as IP and MAC address.
* os.homedir() — to return the current user’s home directory.
* os.hostname() — to return the hostname of the operating system.
* os.uptime() — to return the system uptime, in seconds.


## Prerequisites
* NodeJS installed (my version: v18.17.0)
* Javascript basic knowledge - Some usefull exercises [here](javascript_for_NodeJS#readme)

## Examples

### Running the Playbooks using NodeJS
```
node 1-arrow_function.js
```

## License

MIT

## Author Information

Luis Ignacio Callero - [luigicallero@gmail.com](mailto:luigicallero@gmail.com)
