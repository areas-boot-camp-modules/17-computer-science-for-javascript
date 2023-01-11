// returns the average value of an array of numbers
function avg(array) {
  // Total starts at 0.
  let total = 0;
  // Sum numbers in array.
  function sum() {    
    for(let i = 0; i < array.length; i++) {
      total += array[i];
    }
    // Return the new total.
    return total
  }
  sum()
  // Get the average.
  return total/array.length;
}

console.log(avg([10, 80, 4])) // **

module.exports = avg;
