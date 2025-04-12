// Get the table element
const table = document.getElementById("dataTable");

// Get the table headers and cells
const thElements = table.getElementsByTagName("th");
const tdElements = table.getElementsByTagName("td");

// Set the maximum width for th and td elements
const maxWidth = 150; // Change this value as per your requirement

// Fix the width of th elements
for (const th of thElements) {
  th.style.width = `${maxWidth}px`;
}

// Fix the width of td elements and add scroll if content exceeds the width
for (const td of tdElements) {
  td.style.width = `${maxWidth}px`;
  td.style.overflow = "auto";
}

// // Hide the "Next" button initially
// var nextButton = document.getElementById("nextbtntohide");
// nextButton.style.display = "none";

// // Add event listener to the "Return" button
// var returnButton = document.getElementById("Return");
// returnButton.addEventListener("click", function () {
//   // Show the "Next" button again
//   nextButton.style.display = "block";
// });
