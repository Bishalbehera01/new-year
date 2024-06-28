document.getElementById("registrationForm").addEventListener("submit", function(event) {
    // Prevent form submission
    event.preventDefault();
    
    // Get form inputs
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phnnumber = document.getElementById("phnnumber").value;
    var password = document.getElementById("psw").value;
    var confirmPassword = document.getElementById("psw-repeat").value;

    // Validation checks
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // Additional validation checks can be added here

    // If all validation passed, submit the form
    alert("Registration successful!");
    this.submit();
});