// just the names of the properties in teh global object
console.log("*** Showing the methods in the global object")
console.log(global)

// just the names of the properties in teh global object
console.log("*** just the names of the methods in teh global object")
console.log(Object.keys(global))

// Adding a property to the global object
console.log("*** Adding a property to the global object")
global.cat = 'meow!'
console.log(global.cat)