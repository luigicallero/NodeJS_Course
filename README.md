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
