function checkCredentials() {
    // Predefined username and password
    const correctUsername = "admin";
    const correctPassword = "password123";

    // Getting input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Checking if the entered credentials match
    if (username === correctUsername && password === correctPassword) {
        alert("Login successful!");
        window.location.href="index.html";

    } else {
        alert("Incorrect username or password.");
    }
}