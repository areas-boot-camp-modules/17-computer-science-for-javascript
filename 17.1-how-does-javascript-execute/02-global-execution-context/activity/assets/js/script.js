// 1) Where is carNoise stored?
// Global.
const carNoise = 'Honk';
// 2) Where is goFast stored?
// Global.
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // Line 24 (after the user confirms).
  
  // 5) Where is makeNoise stored?
  // Inside goFast(). Functional execution context.
  const makeNoise = sound => {
    console.log(`I’m driving ${speed}. Time to ${sound}!`);
  }

  // 6) What happens in the following statement?
  // Call function makeNoise("Honk"), which then runs the code to console log.
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// If user confirms (`confirm("Do you want to go fast?")` is true), call goFast(80).
if(confirm("Do you want to go fast?")) {
  goFast("80 mph");
}
