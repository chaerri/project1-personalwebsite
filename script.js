// form submit button
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission
  this.reset(); // Clear the form fields

  // Collect the values from the form fields
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const age = document.getElementById('age').value;

  // Output the form data to the console
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Age:", age);

});