// Get a reference to the back button element
const backButton = document.getElementById("Goback");

// Add a click event listener to the back button
backButton.addEventListener("click", goBack);

// Function to handle the back button click event
function goBack() {
  // Use the history object to navigate back
  history.back();
}
// Function to handle key presses
function handleKeyPress(event) {
  // Check if the pressed key is Enter (key code 13)
  if (event.keyCode === 13) {
    // Simulate a click event on the button with the "enterbutton" class
    var enterButtons = document.getElementsByClassName("enterbutton");
    if (enterButtons.length > 0) {
      enterButtons[0].click();
    }
  }
}

// // Add event listener to the document to capture key presses
// document.addEventListener("keydown", handleKeyPress);

// // Add an event listener to the window object
// window.addEventListener("keydown", function (event) {
//   // Check if the left arrow key (keyCode 37) is pressed
//   if (event.keyCode === 37) {
//     // Go back in history
//     history.back();
//   }
// });

// // Add an event listener to the document's keydown event
// document.addEventListener("keydown", function (event) {
//   // Check if Ctrl (or Command on Mac) and R keys are pressed
//   if ((event.ctrlKey || event.metaKey) && event.key === "r") {
//     // Prevent the default behavior (page refresh)
//     event.preventDefault();
//   }
// });

// // Add an event listener to the document's keydown event
// document.addEventListener("keydown", function (event) {
//   // Check if the pressed key is F5 (key code 116)
//   if (event.keyCode === 116) {
//     // Prevent the default behavior (page refresh)
//     event.preventDefault();
//   }
// });
