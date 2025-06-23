document.getElementById('contactForm').addEventListener('submit', function(event) {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name.value || !email.value || !message.value || !emailPattern.test(email.value)) {
    alert("Please fill out all fields correctly.");
    event.preventDefault();
  }
});