// Define a function to be called after a delay using setTimeout
const delayedFunction = () => {
    console.log("Delayed function executed after 2 seconds.");
  };
  
  // Call the delayed function after 2 seconds
  setTimeout(delayedFunction, 2000);
  
  // Define a function to be called repeatedly with a fixed time interval using setInterval
  let counter = 0;
  const intervalFunction = () => {
    counter++;
    console.log(`Interval function executed ${counter} times.`);
    
    // Stop the interval after it has executed 5 times
    if (counter === 5) {
      clearInterval(intervalId);
      console.log("Interval stopped after 5 executions.");
    }
  };
  
  // Call the interval function every 1 second
  const intervalId = setInterval(intervalFunction, 1000);
  