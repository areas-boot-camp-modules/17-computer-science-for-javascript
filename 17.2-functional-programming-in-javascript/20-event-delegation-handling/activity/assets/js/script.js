const buttons = document.getElementsByTagName("button")

const clickHandler = () => {
  
  // TODO: Add a comment describing the purpose of this variable.
  // Give the starting count (before anything happens).
  let count = 0

  // TODO: Add a comment describing what is happening. 
  // clickHandler() returns this function.
  return () => {
    // TODO: Add a comment describing how this variable is being scoped. 
    // This is private.
    count++
    // TODO: Add a comment describing how we are using the 'count' variable.
    // Count gets incremented with each click.
    this.textContent = `Clicks: ${count}`
  }

}

// TODO: Add a comment describing the purpose of this loop.
// Adds a listener to each button.
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", clickHandler())
}
