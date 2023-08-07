// Require in the 'events' core module:
const events = require('events');
const allModules = require('module').builtinModules

console.log('\n*** Showing "events" module properties:\n',events)
console.log('\n*** Showing all modules available on NodeJS: \n', allModules)
