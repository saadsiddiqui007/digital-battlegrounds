

document.getElementById("loginButton").onclick = function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();
  
    // Get the user input for the username and password fields
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Set the correct username and password
    var correctUsername = "admin";
    var correctPassword = "password123";
  
    // Check if the username and password match the correct values
    if (username === correctUsername && password === correctPassword) {
      // If they match, redirect the user to the dashboard page
      window.location.href = "dashboard.html";
    } else {
      // If they don't match, display an error message
      alert("Invalid username or password");
    }
  };

 