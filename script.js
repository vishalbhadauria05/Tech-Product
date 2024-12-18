function validateForm() {
  // Clear previous error messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("ageError").textContent = "";

  let isValid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email format.";
    isValid = false;
  }

  // Password validation
  const password = document.getElementById("password").value.trim();
  if (password === "") {
    document.getElementById("passwordError").textContent = "Password is required.";
    isValid = false;
  } else if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters long.";
    isValid = false;
  }

  // Age validation
  const age = document.getElementById("age").value.trim();
  if (age === "") {
    document.getElementById("ageError").textContent = "Age is required.";
    isValid = false;
  } else if (isNaN(age) || age <= 0) {
    document.getElementById("ageError").textContent = "Age must be a positive number.";
    isValid = false;
  }

  // If all validations pass
  if (isValid) {
    alert("Form submitted successfully!");
  }
}