// Enable the submit button (it’s disabled in the HTML).
function enableSubmitButton() {
  document.getElementById("submit").disabled = false
}

// Wait 8 second, then enable the submit button.
setTimeout(enableSubmitButton, 8000)
