const form = document.querySelector("form");
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Stop the page from reloading!
  alert("Thank you! Your message has been sent.");
});
