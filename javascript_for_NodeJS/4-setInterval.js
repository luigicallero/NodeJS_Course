// Defining a function that instantiates setInterval
const showAlert = () => {
    // Calling setInterval() and passing a function that shows an alert every 5 seconds.
    setInterval(() => {
      console.log('I show every 5 seconds!') // I replaced "alert" (windows browser side) with console.log (server side javascript)
    }, 5000);
  };
   
  // Calling the newInterval() function that calls the setInterval
  showAlert();